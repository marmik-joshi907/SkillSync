import { Target, Wrench, Compass, ArrowRight, Upload, Brain, BarChart3 } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: Target,
      title: 'Best-fit Job Roles',
      description: 'Discover career paths that match your skills and interests perfectly'
    },
    {
      icon: BarChart3,
      title: 'Skill Gap Analysis',
      description: 'Identify exactly what skills you need to land your dream job'
    },
    {
      icon: Wrench,
      title: 'Suggested Certifications',
      description: 'Get personalized recommendations for courses and projects'
    },
    {
      icon: Compass,
      title: 'Visual Career Roadmap',
      description: 'See your path to success with a clear 6-month action plan'
    }
  ];

  const howItWorks = [
    {
      icon: Upload,
      title: 'Upload Your Data',
      description: 'Upload resume or connect LinkedIn/GitHub'
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our AI parses your skills and experience'
    },
    {
      icon: BarChart3,
      title: 'Get Insights',
      description: 'Receive personalized career recommendations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SkillSync
            </h1>
            <button
              onClick={onGetStarted}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your skills. Your map.{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your future.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop guessing about your career. SkillSync analyzes your profile and creates a personalized 
            roadmap to land your dream job in tech.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 text-lg font-semibold inline-flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Confused About Your Career Path?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most college students struggle with these questions every day
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-4xl mb-4">🤔</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                "What job should I apply for?"
              </h3>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                "Am I ready for product companies?"
              </h3>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                "What are my skill gaps?"
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How SkillSync Helps You Win
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Go beyond basic resume analysis with AI-powered career intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get personalized career insights in just 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Accuracy in job matching</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <p className="text-blue-100">Students helped</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6 months</div>
              <p className="text-blue-100">Average time to job</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Map Your Career Success?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who've found their perfect career path with SkillSync
          </p>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 text-lg font-semibold inline-flex items-center space-x-2"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}