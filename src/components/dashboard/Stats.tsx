import React from "react";
import { Card, CardContent, Badge } from "../ui";

export const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <Card>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-900 font-semibold">Total Sales</h3>
            <Badge variant="success">+12%</Badge>
          </div>
          <p className="text-3xl font-bold text-gray-900">$45,231</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-900 font-semibold">Visitors</h3>
            <Badge variant="error">-8%</Badge>
          </div>
          <p className="text-3xl font-bold text-gray-900">32,451</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-900 font-semibold">Total Orders</h3>
            <Badge variant="success">+5%</Badge>
          </div>
          <p className="text-3xl font-bold text-gray-900">1,257</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-900 font-semibold">Total Users</h3>
            <Badge variant="warning">+2%</Badge>
          </div>
          <p className="text-3xl font-bold text-gray-900">12,589</p>
        </CardContent>
      </Card>
    </div>
  );
};
