import React from 'react';
import type { StatCard as StatCardType } from '../../types';
import { TrendingUp, TrendingDown } from '../icons';

const StatCard: React.FC<StatCardType> = ({ title, value, icon, trend, bgColor, iconColor }) => {
    return (
        <div className="bg-white rounded-2xl p-6 flex items-center justify-between">
            <div>
                <p className="text-gray-500 text-sm mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            </div>
            <div className="flex items-center space-x-2">
                <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColor}`}
                >
                    <span className={`${iconColor} w-6 h-6 flex items-center justify-center`}>
                        {icon}
                    </span>
                </div>

                {trend && (
                    <div className={`text-${trend === 'up' ? 'green' : 'red'}-500`}>
                        {trend === 'up' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    </div>
                )}
            </div>
        </div>
    );
};

export const StatCards: React.FC<{ stats: StatCardType[] }> = ({ stats }) => {
    return (
        <div className="grid grid-cols-4 gap-6 mb-4">
            {stats.map((stat, idx) => (
                <StatCard key={idx} {...stat} />
            ))}
        </div>
    );
};