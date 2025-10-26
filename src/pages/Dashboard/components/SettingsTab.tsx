"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/contexts/SessionContext";
import { showError, showSuccess } from "@/utils/toast";
import { Skeleton } from "@/components/ui/skeleton";

const SettingsTab = () => {
  const { user } = useSession();
  const queryClient = useQueryClient();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase
        .from("profiles")
        .select("first_name, last_name")
        .eq("id", user.id)
        .single();
      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!user,
  });

  useEffect(() => {
    if (profile) {
      setFirstName(profile.first_name || "");
      setLastName(profile.last_name || "");
    }
  }, [profile]);

  const updateProfileMutation = useMutation({
    mutationFn: async ({ firstName, lastName }: { firstName: string; lastName: string }) => {
      if (!user) throw new Error("User not authenticated");
      const { error } = await supabase
        .from("profiles")
        .update({ first_name: firstName, last_name: lastName, updated_at: new Date() })
        .eq("id", user.id);
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile", user?.id] });
      showSuccess("Profile updated successfully!");
    },
    onError: (error) => {
      showError(`Error updating profile: ${error.message}`);
    },
  });

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfileMutation.mutate({ firstName, lastName });
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      showError("Password must be at least 6 characters long.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      showError(`Error updating password: ${error.message}`);
    } else {
      showSuccess("Password updated successfully!");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <form onSubmit={handleProfileSave}>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Update your personal information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoadingProfile ? (
              <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button type="submit" disabled={updateProfileMutation.isPending}>
              {updateProfileMutation.isPending ? "Saving..." : "Save"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Card>
        <form onSubmit={handlePasswordUpdate}>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button type="submit">Update Password</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SettingsTab;