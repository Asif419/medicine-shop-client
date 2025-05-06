'use client'

import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
  { month: "January", visitors: 186, users: 80 },
  { month: "February", visitors: 305, users: 180 },
  { month: "March", visitors: 237, users: 120 },
  { month: "April", visitors: 73, users: 50 },
  { month: "May", visitors: 209, users: 130 },
  { month: "June", visitors: 214, users: 80 },
]

const chartConfig = {
  visitors: {
    label: "visitors",
    color: "var(--chart-4)",
  },
  users: {
    label: "users",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

const AdminDashboardPage = () => {
  const [totalOrders, setTotalOrders] = useState(0);
  const [stockItems, setStockItems] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/orders/order/my-orders', {
          headers: {
            Authorization: token || '',
          },
        });
        const result = await res.json();
        if (result.success && Array.isArray(result.data)) {
          setTotalOrders(result.data.length);
        }
      } catch (error) {
        console.error('Failed to fetch orders', error);
      }
    };

    const fetchMedicines = async () => {
      try {
        const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/medicine');
        const result = await res.json();
        if (result.status && Array.isArray(result.data)) {
          const count = result.data.filter((med: { quantity: number }) => med.quantity > 0).length;
          setStockItems(count);
        }
      } catch (error) {
        console.error('Failed to fetch medicines', error);
      }
    };

    fetchOrders();
    fetchMedicines();
  }, []);



  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>


      <Card className='w-2/5'>
        <CardHeader>
          <CardTitle>Visitor VS User</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
              <Bar dataKey="users" fill="var(--color-users)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <p className="text-gray-500 mb-1">Total Orders</p>
          <h2 className="text-2xl font-bold text-gray-800">{totalOrders}</h2>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <p className="text-gray-500 mb-1">Stock Items</p>
          <h2 className="text-2xl font-bold text-gray-800">{stockItems}</h2>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;