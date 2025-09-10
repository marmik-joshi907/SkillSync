import React, { useState } from 'react';
import { CheckCircle, Circle, Clock, Target, Star, ArrowRight, Calendar } from 'lucide-react';

export default function CareerRoadmap() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('6months');

  const timeframes = [
    { id: '3months', label: '3 Months', description: 'Quick wins' },
    { id: '6months', label: '6 Months', description: 'Recommended' },
    { id: '12months', label: '12 Months', description: 'Comprehensive' }
  ];

  const roadmapData = {
    '3months': [
      {
        month: 'Month 1',
        focus: 'Strengthen Core Skills',
        status: 'completed',
        items: [
          { task: 'Complete TypeScript fundamentals', status: 'completed', priority: 'high' },
          { task: 'Build a React TypeScript project', status: 'completed', priority: 'high' },
          { task: 'Learn Git advanced features', status: 'in-progress', priority: 'medium' }
        ]
      },
      {
        month: 'Month 2',
        focus: 'Backend & Database',
        status: 'in-progress',
        items: [
          { task: 'Master PostgreSQL queries', status: 'in-progress', priority: 'high' },
          { task: 'Build REST API with Express', status: 'pending', priority: 'high' },
          { task: 'Learn database design patterns', status: 'pending', priority: 'medium' }
        ]
      },
      {
        month: 'Month 3',
        focus: 'Deploy & Apply',
        status: 'pending',
        items: [
          { task: 'Learn Docker basics', status: 'pending', priority: 'high' },
          { task: 'Deploy full-stack app', status: 'pending', priority: 'high' },
          { task: 'Apply to 10+ companies', status: 'pending', priority: 'high' }
        ]
      }
    ],
    '6months': [
      {
        month: 'Month 1-2',
        focus: 'Foundation Building',
        status: 'completed',
        items: [
          { task: 'Master TypeScript & advanced React', status: 'completed', priority: 'high' },
          { task: 'Learn testing with Jest & RTL', status: 'in-progress', priority: 'high' },
          { task: 'Build 2 portfolio projects', status: 'in-progress', priority: 'medium' }
        ]
      },
      {
        month: 'Month 3-4',
        focus: 'Backend & DevOps',
        status: 'in-progress',
        items: [
          { task: 'Master Node.js & Express', status: 'in-progress', priority: 'high' },
          { task: 'Learn Docker & containerization', status: 'pending', priority: 'high' },
          { task: 'Database design & optimization', status: 'pending', priority: 'medium' }
        ]
      },
      {
        month: 'Month 5-6',
        focus: 'System Design & Job Hunt',
        status: 'pending',
        items: [
          { task: 'Learn basic system design', status: 'pending', priority: 'high' },
          { task: 'Build microservices project', status: 'pending', priority: 'medium' },
          { task: 'Interview preparation & applications', status: 'pending', priority: 'high' }
        ]
      }
    ],
    '12months': [
      {
        month: 'Month 1-3',
        focus: 'Strengthen Fundamentals',
        status: 'completed',
        items: [
          { task: 'Master TypeScript & React ecosystem', status: 'completed', priority: 'high' },
          { task: 'Learn testing methodologies', status: 'in-progress', priority: 'high' },
          { task: 'Build responsive web applications', status: 'completed', priority: 'medium' }
        ]
      },
      {
        month: 'Month 4-6',
        focus: 'Backend & Cloud',
        status: 'in-progress',
        items: [
          { task: 'Master backend frameworks', status: 'in-progress', priority: 'high' },
          { task: 'Learn cloud platforms (AWS/Azure)', status: 'pending', priority: 'high' },
          { task: 'Database administration', status: 'pending', priority: 'medium' }
        ]
      },
      {
        month: 'Month 7-9',
        focus: 'Advanced Concepts',
        status: 'pending',
        items: [
          { task: 'System design & architecture', status: 'pending', priority: 'high' },
          { task: 'Advanced DevOps & CI/CD', status: 'pending', priority: 'medium' },
          { task: 'Performance optimization', status: 'pending', priority: 'medium' }
        ]
      },
      {
        month: 'Month 10-12',
        focus: 'Specialization & Career',
        status: 'pending',
        items: [
          { task: 'Choose specialization (e.g., ML, Security)', status: 'pending', priority: 'medium' },
          { task: 'Contribute to open source', status: 'pending', priority: 'low' },
          { task: 'Senior role applications', status: 'pending', priority: 'high' }
        ]
      }
    ]
  };

  const currentRoadmap = roadmapData[selectedTimeframe as keyof typeof roadmapData];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-blue-600" />;
      default: return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'border-green-500 bg-green-50';
      case 'in-progress': return 'border-blue-500 bg-blue-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-green-600 bg-green-100';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Your Career Roadmap</h1>
        <p className="text-blue-100 mb-4">
          Personalized learning path to become a full-stack developer at a product company
        </p>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span>Target Role: Backend Developer</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span>Company Type: Mid-level Product Startups</span>
          </div>
        </div>
      </div>

      {/* Timeframe Selection */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Timeline</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe.id}
              onClick={() => setSelectedTimeframe(timeframe.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedTimeframe === timeframe.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1">{timeframe.label}</h3>
                <p className="text-sm text-gray-600">{timeframe.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Progress Overview</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {currentRoadmap.filter(phase => phase.status === 'completed').length}
            </div>
            <div className="text-sm text-green-700">Completed Phases</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {currentRoadmap.filter(phase => phase.status === 'in-progress').length}
            </div>
            <div className="text-sm text-blue-700">In Progress</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-600 mb-1">
              {currentRoadmap.filter(phase => phase.status === 'pending').length}
            </div>
            <div className="text-sm text-gray-700">Upcoming</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {Math.round((currentRoadmap.filter(phase => phase.status === 'completed').length / currentRoadmap.length) * 100)}%
            </div>
            <div className="text-sm text-purple-700">Overall Progress</div>
          </div>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="space-y-6">
        {currentRoadmap.map((phase, index) => (
          <div key={index} className={`bg-white rounded-xl p-6 border-2 ${getStatusColor(phase.status)}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getStatusIcon(phase.status)}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{phase.month}</h3>
                  <p className="text-sm text-gray-600">{phase.focus}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {phase.status === 'completed' ? 'Completed' : 
                   phase.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {phase.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(item.status)}
                    <span className="text-gray-900">{item.task}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                  </div>
                  {item.status === 'pending' && (
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                      <span>Start</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">This Week</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Complete PostgreSQL tutorial (3 hours)</li>
              <li>• Start building expense tracker API</li>
              <li>• Review database normalization concepts</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">This Month</h3>
            <ul className="space-y-1 text-sm text-green-800">
              <li>• Master Express.js middleware</li>
              <li>• Learn Docker containerization</li>
              <li>• Deploy first full-stack application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}