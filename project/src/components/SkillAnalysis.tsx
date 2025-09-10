import { CheckCircle, AlertCircle, TrendingUp, Star, Target } from 'lucide-react';

export default function SkillAnalysis() {
  const skillCategories = [
    {
      name: 'Frontend Development',
      score: 85,
      skills: [
        { name: 'React.js', level: 90, status: 'strong', demand: 'high' },
        { name: 'JavaScript', level: 85, status: 'strong', demand: 'high' },
        { name: 'CSS/Tailwind', level: 75, status: 'good', demand: 'high' },
        { name: 'TypeScript', level: 40, status: 'weak', demand: 'high' },
        { name: 'Next.js', level: 20, status: 'missing', demand: 'medium' }
      ]
    },
    {
      name: 'Backend Development',
      score: 65,
      skills: [
        { name: 'Node.js', level: 70, status: 'good', demand: 'high' },
        { name: 'Express.js', level: 65, status: 'good', demand: 'high' },
        { name: 'MongoDB', level: 60, status: 'good', demand: 'medium' },
        { name: 'PostgreSQL', level: 30, status: 'weak', demand: 'high' },
        { name: 'Docker', level: 0, status: 'missing', demand: 'high' }
      ]
    },
    {
      name: 'Tools & DevOps',
      score: 45,
      skills: [
        { name: 'Git/GitHub', level: 80, status: 'strong', demand: 'high' },
        { name: 'VS Code', level: 85, status: 'strong', demand: 'medium' },
        { name: 'AWS', level: 25, status: 'weak', demand: 'high' },
        { name: 'CI/CD', level: 10, status: 'missing', demand: 'medium' },
        { name: 'Testing', level: 30, status: 'weak', demand: 'high' }
      ]
    }
  ];

  const overallInsights = [
    {
      type: 'strength',
      title: 'Strong Frontend Foundation',
      description: 'Your React and JavaScript skills are above industry average',
      icon: CheckCircle,
      color: 'green'
    },
    {
      type: 'opportunity',
      title: 'Enhance Backend Skills',
      description: 'Focus on database optimization and API design patterns',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      type: 'critical',
      title: 'Missing DevOps Knowledge',
      description: 'Docker and AWS skills are essential for modern development',
      icon: AlertCircle,
      color: 'red'
    }
  ];

  const getSkillColor = (status: string) => {
    switch (status) {
      case 'strong': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'weak': return 'bg-yellow-500';
      case 'missing': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Skill Analysis Report</h1>
        <p className="text-gray-600 mb-4">
          Detailed breakdown of your technical skills and market alignment
        </p>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-sm text-gray-700">Strong (80%+)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-sm text-gray-700">Good (60-79%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="text-sm text-gray-700">Needs Work (40-59%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="text-sm text-gray-700">Missing (0-39%)</span>
          </div>
        </div>
      </div>

      {/* Overall Insights */}
      <div className="grid md:grid-cols-3 gap-6">
        {overallInsights.map((insight, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                insight.color === 'green' ? 'bg-green-100' :
                insight.color === 'blue' ? 'bg-blue-100' : 'bg-red-100'
              }`}>
                <insight.icon className={`w-5 h-5 ${
                  insight.color === 'green' ? 'text-green-600' :
                  insight.color === 'blue' ? 'text-blue-600' : 'text-red-600'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skill Categories */}
      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">Category Score:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      style={{ width: `${category.score}%` }}
                    />
                  </div>
                  <span className="text-lg font-bold text-gray-900">{category.score}%</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getSkillColor(skill.status)}`} />
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(skill.demand)}`}>
                      {skill.demand} demand
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-2 rounded-full ${getSkillColor(skill.status)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12 text-right">
                      {skill.level}%
                    </span>
                    {skill.demand === 'high' && skill.level < 60 && (
                      <Target className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skill Improvement Recommendations */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Priority Skill Improvements</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border border-red-200 rounded-lg bg-red-50">
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="font-medium text-red-900">Critical Gap</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Docker & Containerization</h3>
            <p className="text-sm text-gray-700 mb-2">
              Essential for modern development workflows and deployment
            </p>
            <div className="text-xs text-gray-600">
              Recommended: Docker Fundamentals course (2-3 weeks)
            </div>
          </div>
          
          <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="font-medium text-yellow-900">High Impact</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">TypeScript</h3>
            <p className="text-sm text-gray-700 mb-2">
              Strengthen your React skills with type safety
            </p>
            <div className="text-xs text-gray-600">
              Recommended: TypeScript for React Developers (1-2 weeks)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}