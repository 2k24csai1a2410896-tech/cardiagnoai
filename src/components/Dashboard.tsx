import React from 'react';
import { 
  Heart, 
  Activity, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Users
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const healthMetrics = [
    {
      title: 'Blood Pressure',
      value: '118/76',
      status: 'Normal',
      trend: '+2%',
      color: 'green',
      icon: Heart,
    },
    {
      title: 'Cholesterol',
      value: '185 mg/dL',
      status: 'Optimal',
      trend: '-5%',
      color: 'green',
      icon: Activity,
    },
    {
      title: 'Heart Rate',
      value: '68 BPM',
      status: 'Good',
      trend: '+1%',
      color: 'blue',
      icon: Heart,
    },
    {
      title: 'Risk Score',
      value: '13/100',
      status: 'Low Risk',
      trend: '-8%',
      color: 'green',
      icon: TrendingUp,
    },
  ];

  const recentAlerts = [
    {
      type: 'warning',
      title: 'Cholesterol Trend',
      message: 'LDL levels showing upward trend over last 3 months',
      time: '2 hours ago',
    },
    {
      type: 'info',
      title: 'New Report Available',
      message: 'ECG analysis completed for report dated 2025-01-15',
      time: '1 day ago',
    },
    {
      type: 'success',
      title: 'Health Goal Achieved',
      message: 'Blood pressure maintained in optimal range for 30 days',
      time: '3 days ago',
    },
  ];

  const upcomingTests = [
    { name: 'Lipid Profile', date: '2025-02-01', type: 'Routine' },
    { name: 'ECG', date: '2025-02-15', type: 'Follow-up' },
    { name: 'Stress Test', date: '2025-03-01', type: 'Annual' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Health Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive cardiovascular health insights</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Last Updated</p>
            <p className="font-semibold text-gray-900">Today, 9:45 AM</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Health Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${metric.color}-50`}>
                  <Icon className={`w-6 h-6 text-${metric.color}-600`} />
                </div>
                <span className={`text-sm px-2 py-1 rounded-full bg-${metric.color}-50 text-${metric.color}-700 font-medium`}>
                  {metric.trend}
                </span>
              </div>
              <h3 className="text-gray-600 font-medium mb-1">{metric.title}</h3>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                <span className={`text-sm text-${metric.color}-600 font-medium`}>
                  {metric.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  alert.type === 'warning' ? 'bg-amber-100' :
                  alert.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  {alert.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                  {alert.type === 'success' && <CheckCircle className="w-4 h-4 text-green-600" />}
                  {alert.type === 'info' && <FileText className="w-4 h-4 text-blue-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900">{alert.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-2 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {alert.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tests */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Tests</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Schedule New
            </button>
          </div>
          <div className="space-y-4">
            {upcomingTests.map((test, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div>
                  <h4 className="font-medium text-gray-900">{test.name}</h4>
                  <p className="text-sm text-gray-600">{test.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{test.date}</p>
                  <p className="text-sm text-gray-500">Scheduled</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">AI Health Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Cardiovascular Risk Assessment</h4>
            <p className="text-sm text-gray-600">
              Based on your recent reports, your 10-year cardiovascular risk is <span className="font-semibold text-green-600">13% (Low)</span>. 
              Continue maintaining current lifestyle habits.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Recommended Actions</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Monitor cholesterol levels monthly</li>
              <li>• Maintain regular exercise routine</li>
              <li>• Schedule annual cardiac screening</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;