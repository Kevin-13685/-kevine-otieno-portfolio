import { BarChart3, Mail, Linkedin, Github, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">Kevine Otieno</span>
            </div>
            <p className="text-gray-300 text-sm">
              Freelance Data Analyst passionate about transforming data into actionable insights.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/bio" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Bio
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/elevator-pitch" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Elevator Pitch
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:kelvinaremo2016@gmail.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>kelvinaremo2016@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/kevine-otieno-46abb7200" 
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Kevin-13685" 
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Kevine Otieno. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
