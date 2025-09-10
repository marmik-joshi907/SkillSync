import React from 'react';
import { TrendingUp, Target, Users, Award, ArrowUp, ArrowDown } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      label: 'Career Readiness Score',
      value: '78%',
      change: '+12%',
      trend: 'up',
      icon: Target,
      color: 'blue'
    },
    {
      label: 'Skills Matched',
      value: '15/20',
      change: '+3',
      trend: 'up',
      icon: Award,
      color: 'green'
    },
    {
      label: 'Job Compatibility',
      value: '85%',
      change: '+5%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      label: 'Market Demand',
      value: 'High',
      change: 'Rising',
      trend: 'up',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const recommendations = [
    {
      type: 'Skill Gap',
      title: 'Learn Docker & Kubernetes',
      description: 'These containerization skills are in high demand for backend roles',
      priority: 'High',
      timeframe: '2-3 weeks'
    },
    {
      type: 'Project',
      title: 'Build a Microservices App',
      description: 'Showcase your system design skills with a distributed application',
      priority: 'Medium',
      timeframe: '1 month'
    },
    {
      type: 'Certification',
      title: 'AWS Cloud Practitioner',
      description: 'Cloud skills are essential for modern development roles',
      priority: 'High',
      timeframe: '3-4 weeks'
    }
  ];

  const recentActivity = [
    { action: 'Updated resume', time: '2 hours ago', type: 'update' },
    { action: 'Completed React assessment', time: '1 day ago', type: 'achievement' },
    { action: 'Applied to 3 jobs', time: '3 days ago', type: 'application' },
    { action: 'Started Docker course', time: '1 week ago', type: 'learning' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Anjali! 👋</h1>
        <p className="text-blue-100 mb-4">
          Your career readiness has improved by 12% this month. Keep up the great work!
        </p>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="text-sm font-medium">Next Goal: 85% Readiness</span>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="text-sm font-medium">Target Role: Backend Developer</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-100' :
                stat.color === 'green' ? 'bg-green-100' :
                stat.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                }`} />
              </div>
              <div className={`flex items-center text-sm ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                <span className="ml-1">{stat.change}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recommendations */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Priority Recommendations</h2>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rec.type === 'Skill Gap' ? 'bg-red-100 text-red-700' :
                      rec.type === 'Project' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {rec.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rec.priority === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {rec.priority} Priority
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{rec.timeframe}</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{rec.title}</h3>
                <p className="text-sm text-gray-600">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'update' ? 'bg-blue-500' :
                  activity.type === 'achievement' ? 'bg-green-500' :
                  activity.type === 'application' ? 'bg-purple-500' : 'bg-orange-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="text-sm font-medium text-gray-900 mb-1">Update Skills</div>
            <div className="text-xs text-gray-600">Add new skills to your profile</div>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="text-sm font-medium text-gray-900 mb-1">Find Jobs</div>
            <div className="text-xs text-gray-600">Browse recommended positions</div>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="text-sm font-medium text-gray-900 mb-1">Track Progress</div>
            <div className="text-xs text-gray-600">View your improvement timeline</div>
          </button>
        </div>
      </div>
    </div>
  );
}