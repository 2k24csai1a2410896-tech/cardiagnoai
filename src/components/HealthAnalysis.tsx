import React from 'react';
import { 
  Heart, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Activity,
  Shield,
  Target,
  Brain
} from 'lucide-react';

const HealthAnalysis: React.FC = () => {
  const analysisResults = [
    {
      category: 'Cardiovascular Risk',
      score: 87,
      status: 'Low Risk',
      color: 'green',
      findings: [
        'Blood pressure within optimal range (118/76)',
        'Total cholesterol levels are well-controlled',
        'HDL cholesterol above recommended levels',
        'No signs of arterial blockage'
      ],
      recommendations: [
        'Continue current exercise routine',
        'Maintain Mediterranean diet',
        'Regular monitoring every 6 months'
      ]
    },
    {
      category: 'Metabolic Health',
      score: 92,
      status: 'Excellent',
      color: 'green',
      findings: [
        'Glucose levels within normal range',
        'Insulin sensitivity optimal',
        'HbA1c levels indicate good glucose control',
        'Triglyceride levels normal'
      ],
      recommendations: [
        'Continue balanced nutrition',
        'Maintain regular meal timing',
        'Annual diabetes screening'
      ]
    },
    {
      category: 'Lipid Profile',
      score: 78,
      status: 'Good',
      color: 'blue',
      findings: [
        'Total cholesterol: 185 mg/dL (optimal)',
        'LDL cholesterol: 110 mg/dL (near optimal)',
        'HDL cholesterol: 58 mg/dL (good)',
        'Triglycerides: 120 mg/dL (normal)'
      ],
      recommendations: [
        'Increase omega-3 fatty acids',
        'Consider statins if family history present',
        'Recheck in 3 months'
      ]
    }
  ];

  const riskFactors = [
    { factor: 'Age', value: '45 years', risk: 'Moderate', color: 'amber' },
    { factor: 'Family History', value: 'Positive', risk: 'High', color: 'red' },
    { factor: 'Smoking', value: 'Never', risk: 'Low', color: 'green' },
    { factor: 'Physical Activity', value: 'Regular', risk: 'Low', color: 'green' },
    { factor: 'BMI', value: '23.5', risk: 'Low', color: 'green' },
    { factor: 'Stress Level', value: 'Moderate', risk: 'Moderate', color: 'amber' }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-50 border-green-200';
    if (score >= 75) return 'bg-blue-50 border-blue-200';
    if (score >= 60) return 'bg-amber-50 border-amber-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Health Analysis</h1>
          <p className="text-gray-600 mt-1">AI-powered cardiovascular health assessment</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Last Analysis</p>
            <p className="font-semibold text-gray-900">January 15, 2025</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Overall Health Score */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Overall Health Score</h2>
            <p className="text-gray-600">Based on comprehensive analysis of your medical reports</p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold text-green-600 mb-2">85</div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">Good Health</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {analysisResults.map((analysis, index) => (
          <div key={index} className={`p-6 rounded-xl border ${getScoreBg(analysis.score)}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{analysis.category}</h3>
              <div className="text-right">
                <div className={`text-2xl font-bold ${getScoreColor(analysis.score)}`}>
                  {analysis.score}
                </div>
                <div className={`text-sm font-medium ${getScoreColor(analysis.score)}`}>
                  {analysis.status}
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                Key Findings
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {analysis.findings.map((finding, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {finding}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Recommendations
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {analysis.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Risk Factors Assessment */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Risk Factors Assessment</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {riskFactors.map((factor, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{factor.factor}</h4>
                <p className="text-sm text-gray-600">{factor.value}</p>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  factor.color === 'green' ? 'bg-green-100 text-green-700' :
                  factor.color === 'amber' ? 'bg-amber-100 text-amber-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {factor.risk}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">AI-Powered Insights</h2>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Heart className="w-3 h-3 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Comprehensive Health Analysis</h4>
              <p className="text-gray-700 leading-relaxed">
                Based on your medical reports from the past 6 months, our AI system has identified that you have a 
                <span className="font-semibold text-green-600"> low cardiovascular risk profile</span>. Your consistent 
                blood pressure readings, optimal cholesterol levels, and healthy lifestyle choices contribute to this positive assessment. 
                However, given your family history of heart disease, we recommend maintaining regular monitoring and considering 
                preventive measures such as <span className="font-semibold">annual cardiac screening</span> and continued lifestyle optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAnalysis;