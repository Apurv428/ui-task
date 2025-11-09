import React from 'react';
import { Card, CardContent, Avatar } from '../ui';

export const UserProfile: React.FC = () => {
    return (
        <Card className="mb-6 shadow-none">
            <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                    <Avatar size="xl" fallback="C" bgColor="bg-blue-500" />
                </div>

                <div className="mb-4 text-left">
                    <p className="text-gray-500 text-sm">Welcome,</p>
                    <h2 className="text-2xl font-bold text-gray-900">CRAFTUI</h2>
                </div>
            </CardContent>
        </Card>
    );
};
