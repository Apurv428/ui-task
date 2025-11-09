import React from 'react';
import { Card, CardContent } from '../ui';
import logo from '../../assets/logo_sidebar.png';

export const UserProfile: React.FC = () => {
    return (
        <Card className="mb-6 shadow-none">

            <CardContent className="p-0">
                <div className="flex items-center mb-2">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-28 w-auto object-contain"
                    />
                </div>

                <div className="mb-4 text-left">
                    <p className="text-gray-500 text-xl">Welcome,</p>
                    <h2 className="text-2xl font-semibold text-gray-900">CRAFTUI</h2>
                </div>
            </CardContent>
        </Card>
    );
};
