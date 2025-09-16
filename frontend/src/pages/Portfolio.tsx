import { motion } from 'framer-motion'
import { BarChart3, Database, FileText, ExternalLink, Calendar } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "2019 KNBS National Census",
      description: "Served as an enumerator in the national census, collecting and processing demographic data for Kenya's population count.",
      type: "Data Collection",
      year: "2019",
      status: "Completed",
      icon: Database,
    },
    {
      id: 2,
      title: "Financial Market Analysis",
      description: "Conducted comprehensive analysis of financial markets using advanced statistical methods and data visualization techniques.",
      type: "Data Analysis",
      year: "2022-2023",
      status: "Completed",
      icon: BarChart3,
    },
    {
      id: 3,
      title: "Client Research Projects",
      description: "Delivered multiple qualitative and quantitative research projects for remote clients across various industries.",
      type: "Research",
      year: "2020-Present",
      status: "Ongoing",
      icon: FileText,
    },
    {
      id: 4,
      title: "Content Creation Portfolio",
      description: "Created engaging articles and technical content for diverse audiences, combining data insights with clear communication.",
      type: "Writing",
      year: "2021-Present",
      status: "Ongoing",
      icon: FileText,
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my data analysis projects, research work, and professional achievements
          </p>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card mb-12 text-center"
        >
          <div className="bg-primary-50 rounded-lg p-8">
            <BarChart3 className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Coming Soon</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm currently working on showcasing my detailed project portfolio. 
              In the meantime, here's an overview of my professional experience and key projects.
            </p>
            <div className="bg-white rounded-lg p-4 inline-block">
              <p className="text-sm text-gray-500">
                <Calendar className="h-4 w-4 inline mr-1" />
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <project.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.type}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{project.year}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Technical Skills & Tools
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Data Analysis</h4>
              <div className="space-y-2">
                <div className="bg-gray-100 rounded-lg p-2 text-sm">Python</div>
                <div className="bg-gray-100 rounded-lg p-2 text-sm">R</div>
                <div className="bg-gray-100 rounded-lg p-2 text-sm">SQL</div>
                <div className="bg-gray-100 rounded-lg p-2 text-sm">Excel</div>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Visualization</h4>
              <div className="space-y-2">
                <div className="bg-gray-100 rounded-lg p-2 text-sm">Tableau</div>
                <div className="bg-gray-100 rounded-lg p-2 text-sm">Power BI</div>
                <div className="bg-gray-100 rounded-lg p-2 text-sm">Matplotlib</div>
                <div className="bg-gray-100 rounded-lg p-2 text-sm">Seaborn</div>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Research</h4>
              <div className="space-y-2">
                <div className="bg-gray-100 rounded-lg p-2 text-sm">SPSS</div>
                <div className="bg-gray-100 rounded-lg p-2 text-sm">Stata</div>
                <div className="bg-gray-100 rounded-lg p-2 text-sm">Survey Design</div>
                <div className="bg-gray-100 rounded-lg p-2 text-sm">Data Collection</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new data analysis projects and research opportunities.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
