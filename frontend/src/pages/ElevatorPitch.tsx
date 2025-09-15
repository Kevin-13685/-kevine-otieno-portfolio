import { motion } from 'framer-motion'
import { Play, Clock, Target, Users, BarChart3, Video } from 'lucide-react'

const ElevatorPitch = () => {
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
            My <span className="gradient-text">Elevator Pitch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A quick introduction to who I am and what I can do for your business
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card mb-12"
        >
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-12 text-center">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Video className="h-12 w-12 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Coming Soon</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm currently working on creating a compelling video elevator pitch that showcases 
              my passion for data analysis and the value I bring to organizations.
            </p>
            <div className="bg-white rounded-lg p-4 inline-block">
              <p className="text-sm text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Video will be available soon
              </p>
            </div>
          </div>
        </motion.div>

        {/* Written Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            My Story in Words
          </h3>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              "Hi, I'm Kevine Otieno, a passionate data analyst from Nairobi, Kenya. 
              I believe that numbers tell stories—I just help translate them into actionable insights 
              that drive business decisions."
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              "With a background in financial engineering from Jomo Kenyatta University and currently 
              pursuing advanced data science at ALX Africa, I specialize in transforming complex datasets 
              into clear, strategic recommendations."
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              "My experience ranges from conducting the 2019 KNBS National Census to delivering 
              research projects for remote clients across various industries. I've helped both large 
              corporations and small businesses make data-driven decisions that impact their bottom line."
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              "Whether you need market research, financial analysis, or predictive modeling, 
              I'm here to turn your data challenges into competitive advantages. Let's work together 
              to unlock the stories hidden in your numbers."
            </p>
          </div>
        </motion.div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card text-center"
          >
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Clear Value Proposition</h3>
            <p className="text-gray-600">
              I translate complex data into actionable business insights that drive growth and inform strategic decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card text-center"
          >
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Experience</h3>
            <p className="text-gray-600">
              From national census work to client research projects, I bring real-world experience to every engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card text-center"
          >
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Future-Focused</h3>
            <p className="text-gray-600">
              Continuously advancing towards machine learning and AI solutions to solve tomorrow's data challenges.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Conversation?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help transform your data into strategic insights that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                <Play className="mr-2 h-4 w-4" />
                Let's Talk
              </a>
              <a 
                href="/portfolio" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ElevatorPitch
