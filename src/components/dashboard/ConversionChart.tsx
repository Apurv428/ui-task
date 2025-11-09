import React from 'react';
import { Settings } from '../icons';

export const ConversionChart: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-2">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Conversion history</h3>
          <p className="text-sm text-gray-500">Week to week performance</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <Settings className="w-5 h-5" />
        </button>
      </div>
      
      <div className="relative h-48">
        <svg viewBox="0 0 400 150" className="w-full h-full">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <path
            d="M 0 120 Q 50 100, 100 80 T 200 60 T 300 40 T 400 20 L 400 150 L 0 150 Z"
            fill="url(#gradient)"
          />
          
          <path
            d="M 0 120 Q 50 100, 100 80 T 200 60 T 300 40 T 400 20"
            stroke="#3B82F6"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};