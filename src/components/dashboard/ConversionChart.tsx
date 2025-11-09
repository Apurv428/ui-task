import React from 'react';
import { PieChart } from '../icons';

export const ConversionChart: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-2">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1 text-left">Conversion history</h3>
          <p className="text-sm text-gray-500">Week to week performance</p>
        </div>
        <button className="bg-gray-100 text-gray-400 hover:text-gray-600 p-2 rounded">
          <PieChart className="w-5 h-5" />
        </button>
      </div>

      <div className="h-30">

        <img
          src="/src/assets/chart_history.png"
          alt="Wave graphic"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};