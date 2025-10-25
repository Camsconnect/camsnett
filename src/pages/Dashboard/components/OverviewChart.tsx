"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import type { Customer } from "./CustomersTab";
import { services } from "@/lib/services";

interface OverviewChartProps {
  customers: Customer[];
}

const servicePriceMap = new Map(services.map(s => [s.name, s.price]));

export default function OverviewChart({ customers }: OverviewChartProps) {
  const monthlyRevenue = Array.from({ length: 12 }, (_, i) => ({
    name: new Date(0, i).toLocaleString('default', { month: 'short' }),
    total: 0,
  }));

  customers
    .filter(c => c.status === 'Paid' && c.created_at)
    .forEach(c => {
      const month = new Date(c.created_at).getMonth();
      const price = servicePriceMap.get(c.service) || 0;
      monthlyRevenue[month].total += price;
    });

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={monthlyRevenue}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}