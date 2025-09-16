import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Briefcase, Target, BookOpen } from 'lucide-react'

const Bio = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Kevine Otieno</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate data analyst dedicated to transforming numbers into meaningful stories
          </p>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <img
              src="/-kevine-otieno-portfolio/kevine.png"
              alt="Kevine Otieno"
              className="w-48 h-48 rounded-full object-cover object-top shadow-2xl border-4 border-white"
              onLoad={() => console.log('Image loaded successfully!')}
              onError={(e) => {
                // Fallback if image doesn't exist
                console.log('Image failed to load:', e.currentTarget.src);
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
            />
            <div 
              className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-2xl border-4 border-white"
              style={{ display: 'none' }}
            >
              <span className="text-6xl font-bold text-primary-600">KO</span>
            </div>
          </div>
        </motion.div>

        {/* Main Bio Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card mb-12"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Kevine Otieno is a freelance data analyst who is based in Nairobi, Kenya. He is passionate 
              about everything data related and is currently pursuing a Data Science program at ALX Africa 
              which he hopes to bring him closer to being a data guru.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              His passion for data stems from his background in financial engineering, a degree he acquired 
              from the great Jomo Kenyatta University. He enjoys analyzing data and building models based 
              on the data to inform decisions and strategies of both large and small organizations.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              His career in data has seen him starting off as an enumerator in the 2019 KNBS National Census. 
              He has also done a wide variety of both qualitative and quantitative research projects for 
              remote clients. In addition to data, he has professional experience as a freelance writer, 
              creating articles and content for diverse audiences.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Kevin hopes to advance his career in data to the level of building machine learning and AI models.
            </p>
          </div>
        </motion.div>

        {/* Key Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Location</h3>
            </div>
            <p className="text-gray-600">Nairobi, Kenya</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Education</h3>
            </div>
            <p className="text-gray-600">Financial Engineering, Jomo Kenyatta University</p>
            <p className="text-sm text-gray-500 mt-1">Currently: Data Science Program at ALX Africa</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
            </div>
            <ul className="text-gray-600 space-y-1">
              <li>• 2019 KNBS National Census Enumerator</li>
              <li>• Freelance Data Analyst</li>
              <li>• Freelance Writer</li>
              <li>• Research Project Consultant</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
          >
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Goals</h3>
            </div>
            <p className="text-gray-600">Advance to building machine learning and AI models for complex business solutions</p>
          </motion.div>
        </div>

        {/* Skills & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card"
        >
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-primary-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">Skills & Expertise</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Data Analysis</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Statistical Analysis</li>
                <li>• Data Visualization</li>
                <li>• Database Management</li>
                <li>• Report Generation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Research & Writing</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Qualitative Research</li>
                <li>• Quantitative Research</li>
                <li>• Content Creation</li>
                <li>• Technical Writing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Bio
