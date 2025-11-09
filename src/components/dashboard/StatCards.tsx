import React from 'react';
import type { StatCard as StatCardType } from '../../types';
import { TrendingUp, TrendingDown } from '../icons';

const StatCard: React.FC<StatCardType> = ({ title, value, icon, trend, bgColor, iconColor }) => {
    return (
        <div
            className="
                bg-white rounded-2xl p-6 
                flex flex-col sm:flex-row 
                items-center sm:items-center sm:justify-between
                text-center sm:text-left
                min-w-[220px] sm:min-w-0
            "
        >
            {/* Icon first on mobile, right side on desktop */}
            <div className="mb-4 sm:mb-0 sm:order-2 flex flex-col items-center">
                <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColor}`}
                >
                    <span className={`${iconColor} w-6 h-6 flex items-center justify-center`}>
                        {icon}
                    </span>
                </div>

                {trend && (
                    <div
                        className={`mt-2 sm:mt-0 text-${trend === 'up' ? 'green' : 'red'}-500`}
                    >
                        {trend === 'up' ? (
                            <TrendingUp className="w-5 h-5" />
                        ) : (
                            <TrendingDown className="w-5 h-5" />
                        )}
                    </div>
                )}
            </div>

            {/* Text section */}
            <div className="sm:order-1">
                <p className="text-gray-500 text-sm mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            </div>
        </div>
    );
};

export const StatCards: React.FC<{ stats: StatCardType[] }> = ({ stats }) => {
    return (
        <div
            className="
                sm:grid sm:grid-cols-4 sm:gap-6 mb-4
                flex sm:overflow-visible overflow-x-auto 
                space-x-4 sm:space-x-0 
                snap-x snap-mandatory sm:snap-none
                pb-2
            "
        >
            {stats.map((stat, idx) => (
                <div
                    key={idx}
                    className="
                        snap-start sm:snap-none 
                        flex-shrink-0 sm:flex-shrink 
                        w-[220px] sm:w-auto
                    "
                >
                    <StatCard {...stat} />
                </div>
            ))}
        </div>
    );
};
