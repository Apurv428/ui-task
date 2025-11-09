import React from "react";
import { Card, CardContent, Button } from "../ui";

export const SalesGraph: React.FC = () => {
  return (
    <Card className="mb-6">
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-gray-900 font-semibold">Sales Graph</h3>
            <p className="text-gray-500 text-sm">Last 30 days</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="primary">Weekly</Button>
            <Button variant="ghost">Monthly</Button>
            <Button variant="ghost">Yearly</Button>
          </div>
        </div>

        <div className="w-full h-64 bg-gray-100 rounded-md flex items-center justify-center">
          Graph Content
        </div>
      </CardContent>
    </Card>
  );
};
