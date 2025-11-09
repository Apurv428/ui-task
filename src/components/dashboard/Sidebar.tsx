import React from 'react';
import {
    BookCopy,
    BriefcaseBusiness,
    Calculator,
    CalendarDays,
    CircleDotDashed,
    CircleQuestionMark,
    ClipboardCheck,
    Dam,
    MessageSquare,
    MessageSquareDot,
    Package,
    UserLock
} from '../icons';
import logo from '../../assets/logo_sidebar.png';


export const Sidebar: React.FC = () => {
    const menuItems = [
        { icon: <MessageSquare className="w-5 h-5" />, active: true },
        { icon: <BriefcaseBusiness className="w-5 h-5" />, active: false },
        { icon: <ClipboardCheck className="w-5 h-5" />, active: false },
        { icon: <CalendarDays className="w-5 h-5" />, active: false },
        { icon: <UserLock className="w-5 h-5" />, active: false },
        { icon: <MessageSquareDot className="w-5 h-5" />, active: false },
        { icon: <Package className="w-5 h-5" />, active: false },
        { icon: <Calculator className="w-5 h-5" />, active: false },
        { icon: <BookCopy className="w-5 h-5" />, active: false },
        { icon: <CircleDotDashed className="w-5 h-5" />, active: false },
        { icon: <Dam className="w-5 h-5" />, active: false },
        { icon: <CircleQuestionMark className="w-5 h-5" />, active: false },
    ];

    return (
        <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-6 fixed top-0 left-0 h-screen z-50 relative">

            <img
                src={logo}
                alt="Wave graphic"
                className="h-10 w-auto object-contain"
            />

            <div className="flex-1 flex flex-col items-center mt-2 relative w-full">
                {menuItems.map((item, idx) => (
                    <div key={idx} className="relative w-full flex justify-center">
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

                <div className="relative w-10 h-10 mt-auto">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                        alt="User"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                        ✓
                    </span>
                </div>

            </div>
        </div>
    );
};
