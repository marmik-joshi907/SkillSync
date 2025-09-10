import React, { useState } from 'react';
import { Star, Clock, Users, Award, ExternalLink, Play, BookOpen, Target } from 'lucide-react';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Courses', count: 24 },
    { id: 'critical', label: 'Critical Skills', count: 6 },
    { id: 'recommended', label: 'Recommended', count: 8 },
    { id: 'optional', label: 'Nice to Have', count: 10 }
  ];

  const courses = [
    {
      id: 1,
      title: 'Docker & Kubernetes Fundamentals',
      provider: 'TechLearn Pro',
      category: 'critical',
      priority: 'high',
      duration: '4-6 weeks',
      difficulty: 'Intermediate',
      rating: 4.8,
      students: 45000,
      price: 'Free',
      description: 'Master containerization and orchestration for modern development workflows.',
      skills: ['Docker', 'Kubernetes', 'DevOps', 'Container Orchestration'],
      whatYouLearn: [
        'Container fundamentals and Docker basics',
        'Building and managing container images',
        'Kubernetes architecture and deployment',
        'Scaling applications with orchestration'
      ],
      matchReason: 'Critical gap in your profile - Docker skills are required for 89% of backend roles',
      link: 'https://example.com/docker-course',
      type: 'Course',
      format: 'Video + Hands-on'
    },
    {
      id: 2,
      title: 'TypeScript for React Developers',
      provider: 'CodeAcademy',
      category: 'critical',
      priority: 'high',
      duration: '2-3 weeks',
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 32000,
      price: '₹1,999',
      description: 'Strengthen your React skills with type safety and better development experience.',
      skills: ['TypeScript', 'React', 'Type Safety', 'Modern JavaScript'],
      whatYouLearn: [
        'TypeScript fundamentals and syntax',
        'Using TypeScript with React components',
        'Type definitions and interfaces',
        'Advanced TypeScript patterns'
      ],
      matchReason: 'Will increase your frontend match score from 85% to 95%',
      link: 'https://example.com/typescript-course',
      type: 'Course',
      format: 'Interactive'
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner Certification',
      provider: 'AWS Training',
      category: 'recommended',
      priority: 'medium',
      duration: '6-8 weeks',
      difficulty: 'Beginner',
      rating: 4.6,
      students: 89000,
      price: '₹3,999',
      description: 'Get started with cloud computing and AWS services for modern applications.',
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Cloud Architecture'],
      whatYouLearn: [
        'Cloud computing fundamentals',
        'AWS core services overview',
        'Security and compliance basics',
        'Pricing and billing models'
      ],
      matchReason: 'Cloud skills mentioned in 76% of job postings you match with',
      link: 'https://example.com/aws-course',
      type: 'Certification',
      format: 'Self-paced'
    },
    {
      id: 4,
      title: 'System Design for Beginners',
      provider: 'DesignGuru',
      category: 'recommended',
      priority: 'medium',
      duration: '8-10 weeks',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 23000,
      price: '₹4,999',
      description: 'Learn to design scalable systems and ace technical interviews.',
      skills: ['System Design', 'Scalability', 'Architecture', 'Databases'],
      whatYouLearn: [
        'Scalability fundamentals',
        'Database design patterns',
        'Caching strategies',
        'Microservices architecture'
      ],
      matchReason: 'Essential for senior developer roles and technical interviews',
      link: 'https://example.com/system-design',
      type: 'Course',
      format: 'Video + Projects'
    },
    {
      id: 5,
      title: 'Testing React Applications',
      provider: 'Testing Library',
      category: 'recommended',
      priority: 'medium',
      duration: '3-4 weeks',
      difficulty: 'Intermediate',
      rating: 4.5,
      students: 18000,
      price: 'Free',
      description: 'Master testing strategies for React applications with Jest and Testing Library.',
      skills: ['Testing', 'Jest', 'React Testing Library', 'TDD'],
      whatYouLearn: [
        'Testing fundamentals and best practices',
        'Unit testing React components',
        'Integration testing strategies',
        'Test-driven development (TDD)'
      ],
      matchReason: 'Testing skills gap identified in your profile analysis',
      link: 'https://example.com/testing-course',
      type: 'Course',
      format: 'Hands-on'
    },
    {
      id: 6,
      title: 'PostgreSQL Database Administration',
      provider: 'Database Pro',
      category: 'optional',
      priority: 'low',
      duration: '5-6 weeks',
      difficulty: 'Intermediate',
      rating: 4.4,
      students: 15000,
      price: '₹2,499',
      description: 'Deep dive into PostgreSQL for database design and optimization.',
      skills: ['PostgreSQL', 'Database Design', 'SQL Optimization', 'Performance'],
      whatYouLearn: [
        'Advanced SQL queries and optimization',
        'Database indexing strategies',
        'Performance monitoring and tuning',
        'Backup and recovery procedures'
      ],
      matchReason: 'Strengthen your database skills for backend roles',
      link: 'https://example.com/postgresql-course',
      type: 'Course',
      format: 'Video + Labs'
    }
  ];

  const filteredCourses = courses.filter(course => 
    selectedCategory === 'all' || course.category === selectedCategory
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-green-600 bg-green-100';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-blue-600 bg-blue-100';
      default: return 'text-purple-600 bg-purple-100';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Recommended Courses</h1>
        <p className="text-gray-600 mb-4">
          Personalized learning path based on your skill gaps and career goals
        </p>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedCategory === category.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-gray-400 text-gray-700'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Learning Path Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h2 className="text-xl font-bold mb-3">Your Learning Path to Backend Developer</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="w-5 h-5" />
              <span className="font-medium">Phase 1: Critical Skills</span>
            </div>
            <p className="text-sm text-blue-100">Docker, TypeScript - 6-8 weeks</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-5 h-5" />
              <span className="font-medium">Phase 2: Specialization</span>
            </div>
            <p className="text-sm text-blue-100">AWS, System Design - 10-12 weeks</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5" />
              <span className="font-medium">Phase 3: Advanced</span>
            </div>
            <p className="text-sm text-blue-100">Testing, Performance - 6-8 weeks</p>
          </div>
        </div>
      </div>

      {/* Course Listings */}
      <div className="grid gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(course.priority)}`}>
                    {course.priority} priority
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span className="font-medium text-gray-900">{course.provider}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.format}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{course.description}</p>

                {/* Why This Course */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <h4 className="font-medium text-blue-900 mb-1">Why this course is recommended:</h4>
                  <p className="text-sm text-blue-800">{course.matchReason}</p>
                </div>

                {/* Skills & Learning Outcomes */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Skills You'll Gain</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">What You'll Learn</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {course.whatYouLearn.slice(0, 2).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                <div className="flex items-center space-x-2">
                  {course.type === 'Certification' ? (
                    <Award className="w-4 h-4 text-yellow-500" />
                  ) : (
                    <Play className="w-4 h-4 text-blue-500" />
                  )}
                  <span className="text-sm text-gray-600">{course.type}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Save for Later
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <span>Start Learning</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Tips */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">📚 Learning Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Maximize Your Learning:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Set aside 2-3 hours daily for focused learning</li>
              <li>• Build projects while learning each new skill</li>
              <li>• Join community forums and discussion groups</li>
              <li>• Document your learning journey on GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Study Schedule Suggestion:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Week 1-2: Docker fundamentals + hands-on practice</li>
              <li>• Week 3-4: TypeScript integration with existing projects</li>
              <li>• Week 5-6: Build a containerized full-stack application</li>
              <li>• Week 7-8: Deploy to cloud and document the process</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}