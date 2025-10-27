"use client";

import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PlusCircle, Trash2, Edit, CheckCircle, Zap } from "lucide-react";
import AddTaskDialog from "./AddTaskDialog";
import GenerateTasksDialog from "./GenerateTasksDialog";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/contexts/SessionContext";
import { Skeleton } from "@/components/ui/skeleton";
import { showError, showSuccess } from "@/utils/toast";
import type { Customer } from "./CustomersTab";

export interface Task {
  id: string;
  user_id: string;
  customer_id: string;
  title: string;
  description?: string;
  status: "To Do" | "In Progress" | "Done";
  due_date: string;
  completed_at?: string;
  created_at: string;
}

const TasksTab = () => {
  const { user } = useSession();
  const queryClient = useQueryClient();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  const { data: tasks, isLoading: isLoadingTasks } = useQuery({
    queryKey: ["tasks", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", user.id)
        .order("due_date", { ascending: true });
      if (error) throw new Error(error.message);
      return data as Task[];
    },
    enabled: !!user,
  });

  const { data: customers, isLoading: isLoadingCustomers } = useQuery({
    queryKey: ["customers", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase.from("customers").select("*").eq("user_id", user.id);
      if (error) throw new Error(error.message);
      return data as Customer[];
    },
    enabled: !!user,
  });

  const customerMap = useMemo(() => {
    return new Map(customers?.map(c => [c.id, c.name]));
  }, [customers]);

  const groupedTasks = useMemo(() => {
    if (!tasks) return new Map<string, Task[]>();
    return tasks.reduce((acc, task) => {
      const customerId = task.customer_id;
      if (!acc.has(customerId)) {
        acc.set(customerId, []);
      }
      acc.get(customerId)!.push(task);
      return acc;
    }, new Map<string, Task[]>());
  }, [tasks]);

  const taskMutation = useMutation({
    mutationFn: async (newTask: Omit<Task, "id" | "created_at" | "completed_at" | "user_id">) => {
      if (!user) throw new Error("User not authenticated");
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ ...newTask, user_id: user.id }])
        .select();
      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", user?.id] });
      showSuccess("Task added successfully!");
    },
    onError: (error) => {
      showError(`Error adding task: ${error.message}`);
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: async (updatedTask: Partial<Task> & { id: string }) => {
      const { id, ...updateData } = updatedTask;
      const { data, error } = await supabase
        .from("tasks")
        .update(updateData)
        .eq("id", id)
        .select();
      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", user?.id] });
      showSuccess("Task updated successfully!");
    },
    onError: (error) => {
      showError(`Error updating task: ${error.message}`);
    },
  });

  const deleteTaskMutation = useMutation({
    mutationFn: async (taskId: string) => {
      const { error } = await supabase.from("tasks").delete().eq("id", taskId);
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", user?.id] });
      showSuccess("Task deleted successfully!");
    },
    onError: (error) => {
      showError(`Error deleting task: ${error.message}`);
    },
  });

  const generateTasksMutation = useMutation({
    mutationFn: async (newTasks: Omit<Task, "id" | "created_at" | "completed_at" | "user_id">[]) => {
      if (!user) throw new Error("User not authenticated");
      const tasksToInsert = newTasks.map(task => ({ ...task, user_id: user.id }));
      const { data, error } = await supabase
        .from("tasks")
        .insert(tasksToInsert)
        .select();
      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", user?.id] });
      showSuccess("Monthly tasks generated successfully!");
    },
    onError: (error) => {
      showError(`Error generating tasks: ${error.message}`);
    },
  });

  const handleSaveTask = (task: Omit<Task, "id" | "created_at" | "completed_at" | "user_id">) => {
    if (taskToEdit) {
      updateTaskMutation.mutate({ id: taskToEdit.id, ...task });
    } else {
      taskMutation.mutate(task);
    }
  };

  const handleMarkAsDone = (task: Task) => {
    updateTaskMutation.mutate({
      id: task.id,
      status: "Done",
      completed_at: new Date().toISOString(),
    });
  };

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task);
    setIsAddDialogOpen(true);
  };

  const handleAddNewTask = () => {
    setTaskToEdit(null);
    setIsAddDialogOpen(true);
  };

  const getStatusVariant = (status: Task["status"]) => {
    switch (status) {
      case "Done": return "default";
      case "In Progress": return "secondary";
      case "To Do": return "outline";
      default: return "outline";
    }
  };

  const isLoading = isLoadingTasks || isLoadingCustomers;

  return (
    <>
      <AddTaskDialog
        isOpen={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onSave={handleSaveTask}
        customers={customers || []}
        taskToEdit={taskToEdit}
      />
      <GenerateTasksDialog
        isOpen={isGenerateDialogOpen}
        onOpenChange={setIsGenerateDialogOpen}
        onGenerate={(tasks) => generateTasksMutation.mutate(tasks)}
        customers={customers || []}
      />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>
              Manage your to-do list for all your clients.
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1" onClick={() => setIsGenerateDialogOpen(true)}>
              <Zap className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-rap">
                Generate Tasks
              </span>
            </Button>
            <Button size="sm" className="gap-1" onClick={handleAddNewTask}>
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Task
              </span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : groupedTasks.size > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {Array.from(groupedTasks.entries()).map(([customerId, tasksForCustomer]) => (
                <AccordionItem value={customerId} key={customerId}>
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      {customerMap.get(customerId) || "Unknown Customer"}
                      <Badge variant="secondary">{tasksForCustomer.length} tasks</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Task</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>
                            <span className="sr-only">Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tasksForCustomer.map((task) => (
                          <TableRow key={task.id}>
                            <TableCell className="font-medium">{task.title}</TableCell>
                            <TableCell>
                              <Badge variant={getStatusVariant(task.status)}>
                                {task.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {new Date(task.due_date).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  {task.status !== "Done" && (
                                    <DropdownMenuItem onClick={() => handleMarkAsDone(task)}>
                                      <CheckCircle className="mr-2 h-4 w-4" />
                                      Mark as Done
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuItem onClick={() => handleEditTask(task)}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    onClick={() => deleteTaskMutation.mutate(task.id)}
                                    className="text-red-600"
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No tasks found.</p>
              <p className="text-sm text-muted-foreground">Add a new task or generate them for a client to get started.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default TasksTab;