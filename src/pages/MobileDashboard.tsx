import { useState } from "react";
import DashboardData from "../data/DashboardData";
import { BriefcaseBusiness, Calendar, CalendarDays, ClipboardCheck, Menu, MessageSquare, Search, UserLock } from '../components/icons';
import { StatCards } from "../components/dashboard/StatCards";
import BottomNavItem from "../components/dashboard/BottomNavItem";
import ProductItem from "../components/dashboard/ProductItem";
import TabButton from "../components/dashboard/TabButton";

const MobileDashboard = () => {
    const [activeTab, setActiveTab] = useState('Day');
    const [activeNav, setActiveNav] = useState('home');
    const { sales, stats } = DashboardData();


    return (
        <div className="w-full max-w-md mx-auto h-screen bg-gray-50 flex flex-col relative">

            <div className="bg-white p-2 shadow-sm">
                <div className="flex items-center justify-between">
                    <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <Search className="w-5 h-5 text-gray-600 transform rotate-90" />
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                    <button className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                            <span className="text-gray-400 text-base font-medium mb-1">+</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-6">
                <div className="mb-2">
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-4 px-6 min-w-max">
                            <StatCards stats={stats} />
                        </div>
                    </div>
                </div>

                <div className="mb-6 px-6">
                    <h2 className="text-lg font-semibold text-gray-900 text-left">Latest sales</h2>
                    <div className="flex gap-3 mb-4 rounded-xl p-1">
                        {['Day', 'Week', 'Month'].map(tab => (
                            <TabButton
                                key={tab}
                                active={activeTab === tab}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </TabButton>
                        ))}
                        <button className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                            <Calendar className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>

                    <div className="space-y-3">
                        {sales.map((product, idx) => (
                            <ProductItem key={idx} {...product} />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-2 mb-6">
                    <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                </div>
            </div>

            <div className="bg-white border-t border-gray-200 sticky bottom-0 z-50 safe-area-bottom">
                <div className="flex items-center px-4">
                    <BottomNavItem icon={MessageSquare} active={activeNav === 'home'} onClick={() => setActiveNav('home')} />
                    <BottomNavItem icon={BriefcaseBusiness} active={activeNav === 'projects'} onClick={() => setActiveNav('projects')} />
                    <BottomNavItem icon={ClipboardCheck} active={activeNav === 'tasks'} onClick={() => setActiveNav('tasks')} />
                    <BottomNavItem icon={CalendarDays} active={activeNav === 'payments'} onClick={() => setActiveNav('payments')} />
                    <BottomNavItem icon={UserLock} active={activeNav === 'analytics'} onClick={() => setActiveNav('analytics')} />
                    <BottomNavItem icon={Menu} active={activeNav === 'menu'} onClick={() => setActiveNav('menu')} />
                </div>

                <div className="flex justify-center py-2">
                    <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default MobileDashboard;