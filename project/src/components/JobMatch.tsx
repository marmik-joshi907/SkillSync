import React, { useState } from 'react';
import { MapPin, DollarSign, Clock, Users, ExternalLink, Filter, Search } from 'lucide-react';

export default function JobMatch() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'All Jobs', count: 47 },
    { id: 'high-match', label: 'High Match (85%+)', count: 12 },
    { id: 'medium-match', label: 'Medium Match (70-84%)', count: 23 },
    { id: 'entry-level', label: 'Entry Level', count: 18 },
    { id: 'startup', label: 'Startup', count: 15 }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Backend Developer',
      company: 'TechStart Inc.',
      location: 'Bangalore, India',
      type: 'Full-time',
      salary: '₹8-12 LPA',
      experience: '1-3 years',
      matchScore: 92,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'AWS'],
      description: 'Join our growing team to build scalable backend systems for our SaaS platform.',
      posted: '2 days ago',
      applicants: 23,
      companySize: '50-100',
      category: 'high-match',
      requirements: [
        'Strong proficiency in Node.js and Express.js',
        'Experience with NoSQL databases (MongoDB)',
        'Understanding of RESTful API design',
        'Basic knowledge of cloud platforms (AWS preferred)'
      ],
      benefits: ['Health Insurance', 'Stock Options', 'Flexible Hours', 'Learning Budget']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'InnovateLabs',
      location: 'Hyderabad, India',
      type: 'Full-time',
      salary: '₹10-15 LPA',
      experience: '2-4 years',
      matchScore: 88,
      skills: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      description: 'Build end-to-end web applications for our enterprise clients.',
      posted: '1 week ago',
      applicants: 45,
      companySize: '100-500',
      category: 'high-match',
      requirements: [
        'Proficiency in React.js and modern JavaScript',
        'Backend development with Node.js',
        'Database design and optimization',
        'Version control with Git'
      ],
      benefits: ['Health Insurance', 'WFH Options', 'Performance Bonus', 'Gym Membership']
    },
    {
      id: 3,
      title: 'Junior Software Engineer',
      company: 'CodeCraft Solutions',
      location: 'Pune, India',
      type: 'Full-time',
      salary: '₹6-9 LPA',
      experience: '0-2 years',
      matchScore: 78,
      skills: ['JavaScript', 'React', 'Python', 'MySQL'],
      description: 'Perfect entry-level position for fresh graduates passionate about software development.',
      posted: '3 days ago',
      applicants: 67,
      companySize: '20-50',
      category: 'medium-match',
      requirements: [
        'Strong foundation in programming fundamentals',
        'Knowledge of web technologies',
        'Problem-solving skills',
        'Willingness to learn new technologies'
      ],
      benefits: ['Health Insurance', 'Training Programs', 'Mentorship', 'Flexible Hours']
    },
    {
      id: 4,
      title: 'React Developer',
      company: 'Frontend Masters',
      location: 'Remote',
      type: 'Contract',
      salary: '₹40-60k/month',
      experience: '1-3 years',
      matchScore: 85,
      skills: ['React', 'TypeScript', 'Redux', 'CSS'],
      description: 'Join our remote team to build beautiful user interfaces for modern web applications.',
      posted: '5 days ago',
      applicants: 34,
      companySize: '10-20',
      category: 'high-match',
      requirements: [
        'Expert-level React.js knowledge',
        'TypeScript proficiency',
        'State management with Redux',
        'Responsive design skills'
      ],
      benefits: ['Remote Work', 'Flexible Schedule', 'Project Bonuses', 'Latest Equipment']
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesFilter = selectedFilter === 'all' || job.category === selectedFilter || 
                         (selectedFilter === 'entry-level' && job.experience.includes('0-2')) ||
                         (selectedFilter === 'startup' && parseInt(job.companySize) < 100);
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getMatchColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-blue-600 bg-blue-100';
    return 'text-yellow-600 bg-yellow-100';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Recommendations</h1>
        <p className="text-gray-600 mb-4">
          Jobs matched to your skills and career goals, ranked by compatibility
        </p>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs, companies, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {filters.map(filter => (
                <option key={filter.id} value={filter.id}>
                  {filter.label} ({filter.count})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Match Summary */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">12</div>
          <div className="text-sm text-gray-600">High Match (85%+)</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">23</div>
          <div className="text-sm text-gray-600">Good Match (70-84%)</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-purple-600 mb-1">₹8.5L</div>
          <div className="text-sm text-gray-600">Average Salary</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-orange-600 mb-1">47</div>
          <div className="text-sm text-gray-600">Total Matches</div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(job.matchScore)}`}>
                    {job.matchScore}% Match
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span className="font-medium text-gray-900">{job.company}</span>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Job Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {job.requirements.slice(0, 2).map((req, index) => (
                        <li key={index}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.benefits.slice(0, 3).map((benefit, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Posted {job.posted}</span>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{job.applicants} applicants</span>
                </div>
                <span>{job.companySize} employees</span>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Save
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <span>Apply Now</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Application Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">💡 Application Tips</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">To Improve Your Match Score:</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Add Docker and containerization skills</li>
              <li>• Build more backend projects with databases</li>
              <li>• Get AWS or cloud platform certification</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Application Strategy:</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Focus on high-match (85%+) positions first</li>
              <li>• Customize your resume for each application</li>
              <li>• Highlight projects that match job requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}