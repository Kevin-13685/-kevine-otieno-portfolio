import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, ArrowRight, Download } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/data.png"
            alt="Data Science and Analytics"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.currentTarget.style.display = 'none';
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextElement) {
                nextElement.style.display = 'flex';
              }
            }}
          />
          <div 
            className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center"
            style={{ display: 'none' }}
          >
            <div className="text-center">
              <BarChart3 className="h-32 w-32 text-primary-600 mx-auto mb-6" />
              <h3 className="text-4xl font-bold text-primary-800 mb-4">Data Science</h3>
              <p className="text-xl text-primary-600">Transforming data into insights</p>
            </div>
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>

        {/* Content Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              Hi, I'm{' '}
              <span className="gradient-text bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                Kevine Otieno
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white mb-8 max-w-4xl mx-auto font-semibold drop-shadow-xl">
              Numbers tell stories—I just help translate them.
            </p>
            <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-3xl mx-auto drop-shadow-lg">
              Freelance Data Analyst based in Nairobi, Kenya. Passionate about transforming 
              raw data into actionable insights that drive business decisions.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/bio" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center text-lg min-w-[200px]">
                <span className="flex items-center justify-center">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
              <Link to="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center text-lg min-w-[200px]">
                <span className="flex items-center justify-center">
                  View My Work
                  <BarChart3 className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-white bg-opacity-20 rounded-full opacity-60 animate-bounce-slow z-10"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white bg-opacity-20 rounded-full opacity-40 animate-bounce-slow z-10" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I specialize in data analysis, research, and building models that inform strategic decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/data-analysis.png" 
                  alt="Data Analysis" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analysis</h3>
              <p className="text-gray-600">
                Transforming complex datasets into clear, actionable insights that drive business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/research-projects.png" 
                  alt="Research Projects" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Projects</h3>
              <p className="text-gray-600">
                Conducting both qualitative and quantitative research for diverse clients and organizations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/machine-learning.png" 
                  alt="Machine Learning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning</h3>
              <p className="text-gray-600">
                Building predictive models and advancing towards AI solutions for complex business problems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's work together to turn your data into strategic advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/elevator-pitch" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center min-w-[180px]">
                <span className="flex items-center justify-center">
                  Watch My Pitch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center min-w-[180px]">
                <span className="flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Get In Touch
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
