import React, { useRef, useState, useEffect } from 'react';
import type { StatCard as StatCardType } from '../../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TrendingUp, TrendingDown } from '../icons';

const StatCard: React.FC<StatCardType> = ({ title, value, icon, trend, bgColor, iconColor }) => {
    return (
        <div
            className="
                bg-white rounded-2xl p-4
                flex flex-col sm:flex-row 
                items-center sm:justify-between
                text-center sm:text-left
                min-w-[140px] sm:min-w-0
            "
        >
            <div className="mb-3 sm:mb-0 sm:order-2 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-md flex items-center justify-center ${bgColor}`}>
                    <span className={`${iconColor} w-5 h-5 flex items-center justify-center`}>
                        {icon}
                    </span>
                </div>
                {trend && (
                    <div className={`mt-2 text-${trend === 'up' ? 'green' : 'red'}-500`}>
                        {trend === 'up' ? (
                            <TrendingUp className="w-4 h-4" />
                        ) : (
                            <TrendingDown className="w-4 h-4" />
                        )}
                    </div>
                )}
            </div>
            <div className="sm:order-1">
                <p className="text-gray-500 text-xs mb-1">{title}</p>
                <h3 className="text-lg font-bold text-gray-900">{value}</h3>
            </div>
        </div>
    );
};

export const StatCards: React.FC<{ stats: StatCardType[] }> = ({ stats }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', checkScroll);
        checkScroll();
        return () => el.removeEventListener('scroll', checkScroll);
    }, []);

    const scrollByAmount = (amount: number) => {
        scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
    };

    return (
        <div className="relative mb-4">
            {canScrollLeft && (
                <button
                    onClick={() => scrollByAmount(-150)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1 sm:hidden"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
            )}

            <div
                ref={scrollRef}
                className="
                    flex sm:grid sm:grid-cols-4 sm:gap-6
                    overflow-x-auto sm:overflow-visible
                    space-x-3 sm:space-x-0
                    snap-x snap-mandatory sm:snap-none
                    scrollbar-hide
                    pl-4 pr-8 pb-2
                    scroll-smooth
                "
            >
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="
                            snap-start sm:snap-none
                            flex-shrink-0 sm:flex-shrink
                            w-[140px] sm:w-auto
                        "
                    >
                        <StatCard {...stat} />
                    </div>
                ))}
            </div>

            {canScrollRight && (
                <button
                    onClick={() => scrollByAmount(150)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1 sm:hidden"
                >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            )}
        </div>
    );
};
