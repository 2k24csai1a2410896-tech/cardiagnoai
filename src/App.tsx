import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UploadReports from './components/UploadReports';
import HealthAnalysis from './components/HealthAnalysis';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'upload':
        return <UploadReports />;
      case 'analysis':
        return <HealthAnalysis />;
      case 'trends':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">Health Trends</h1>
            <p className="text-gray-600 mt-2">Track your health metrics over time with interactive charts and trend analysis.</p>
            <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500">Health trends visualization coming soon...</p>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">Report History</h1>
            <p className="text-gray-600 mt-2">View and manage all your uploaded medical reports.</p>
            <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500">Report history management coming soon...</p>
            </div>
          </div>
        );
      case 'alerts':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">Health Alerts</h1>
            <p className="text-gray-600 mt-2">Manage your health notifications and alert preferences.</p>
            <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500">Alert management system coming soon...</p>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">My Reports</h1>
            <p className="text-gray-600 mt-2">Access and download your health analysis reports.</p>
            <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500">Report generation and management coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-2">Customize your CardiagnoAI experience and preferences.</p>
            <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500">Settings configuration coming soon...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;