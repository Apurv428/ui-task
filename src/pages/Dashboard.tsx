import { Search } from '../components/icons';

import { UserProfile } from '../components/dashboard/UserProfile';
import { Sidebar } from '../components/common/Sidebar';
import { MessageList } from '../components/dashboard/MessageList';
import { ConversionChart } from '../components/dashboard/ConversionChart';
import { StatCards } from '../components/dashboard/StatCards';
import { SalesTable } from '../components/dashboard/SalesTable';

import DashboardData from '../data/DashboardData';


const Dashboard: React.FC = () => {
  const { messages, sales, stats } = DashboardData();

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex">
        <div className="w-80 bg-white p-6">
          <UserProfile />
          <MessageList messages={messages} />
          <div className="mt-2">
            <ConversionChart />
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="w-10 h-10 bg-gray-100 flex flex-col items-center justify-center space-y-1 hover:bg-gray-100 cursor-pointer">
                <span className="block w-5 h-0.5 bg-gray-400"></span>
                <span className="block w-5 h-0.5 bg-gray-400"></span>
                <span className="block w-5 h-0.5 bg-gray-400"></span>
              </button>

              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            </div>

            <div className="flex items-center justify-end space-x-2">
              <div className="w-full flex justify-end">
                <button className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <Search className="w-5 h-5 transform rotate-90" />
                </button>
              </div>
              <div className="w-full flex justify-end">
                <button className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <span className="text-gray-400 text-base font-medium mb-1">+</span>
                  </div>
                </button>
              </div>


            </div>
          </div>

          <StatCards stats={stats} />
          <SalesTable sales={sales} />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;