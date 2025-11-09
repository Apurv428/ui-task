import React from 'react';
import {
    MessageSquare,
    CreditCard,
    Calendar,
    BarChart3,
    Users,
    Package,
    Lightbulb,
    Send,
    Settings,
    Bell,
    Star,
} from '../icons';
import { Avatar } from '../ui';

export const Sidebar: React.FC = () => {
    const menuItems = [
        { icon: <MessageSquare className="w-5 h-5" />, active: true },
        { icon: <CreditCard className="w-5 h-5" />, active: false },
        { icon: <Calendar className="w-5 h-5" />, active: false },
        { icon: <BarChart3 className="w-5 h-5" />, active: false },
        { icon: <Users className="w-5 h-5" />, active: false },
        { icon: <Settings className="w-5 h-5" />, active: false },
        { icon: <Bell className="w-5 h-5" />, active: false },
        { icon: <Star className="w-5 h-5" />, active: false },
    ];

    return (
        <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-6 fixed top-0 left-0 h-screen z-50 relative">
            <Avatar size="md" fallback="C" bgColor="bg-blue-500" />

            {/* Menu items */}
            <div className="flex-1 flex flex-col items-center space-y-4 mt-8 relative w-full">
                {menuItems.map((item, idx) => (
                    <div key={idx} className="relative w-full flex justify-center">
                        {/* Active indicator */}
                        {item.active && (
                            <div className="absolute top-0 right-0 h-12 w-1 bg-blue-600 rounded-l-full"></div>
                        )}
                        <button
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${item.active
                                ? 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600'
                                : 'text-gray-400 hover:bg-gray-50'
                                }`}
                        >
                            {item.icon}
                        </button>
                    </div>
                ))}

                {/* User avatar */}
                <div className="relative w-10 h-10 mt-auto">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                        alt="User"
                        className="w-full h-full object-cover rounded-lg" // square with rounded corners
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                        ✓
                    </span>
                </div>

            </div>
        </div>
    );
};
