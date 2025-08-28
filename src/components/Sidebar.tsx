import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Heart, 
  TrendingUp, 
  Settings, 
  Bell,
  Upload,
  History
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'upload', label: 'Upload Reports', icon: Upload },
    { id: 'analysis', label: 'Health Analysis', icon: Heart },
    { id: 'trends', label: 'Health Trends', icon: TrendingUp },
    { id: 'history', label: 'Report History', icon: History },
    { id: 'alerts', label: 'Health Alerts', icon: Bell },
    { id: 'reports', label: 'My Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <img 
              src="/logo.svg" 
              alt="CardiagnoAI Logo" 
              className="w-6 h-6"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">CardiagnoAI</h1>
            <p className="text-sm text-gray-500">Health Intelligence</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Heart className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-gray-900">Health Score</span>
          </div>
          <div className="text-2xl font-bold text-green-600 mb-1">87/100</div>
          <p className="text-sm text-gray-600">Good cardiovascular health</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;