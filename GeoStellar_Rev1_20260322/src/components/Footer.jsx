import { Link } from 'react-router-dom'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import BorePyramid from './BorePyramid'

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <BorePyramid
                size={32}
                topColor="#0ea5e9"
                lineColor="#0ea5e9"
                dotColor="#0ea5e9"
                lineOpacity={0.5}
                dotOpacity={0.35}
                topOpacity={0.95}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-xl font-light tracking-wider">
                GEO<span className="font-semibold text-sky-500">STELLAR</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Precision geothermal engineering with Oil & Gas industry standards. 
              Delivering technical excellence to contractors and engineering firms across the Northeast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">About & Team</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" />
                <span>394 Atkins Ave<br />Stoughton, MA 02072</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4 text-sky-500" />
                <a href="mailto:info@geostellar.com" className="hover:text-sky-400 transition-colors">
                  info@geostellar.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4 text-sky-500" />
                <a href="tel:+17816545879" className="hover:text-sky-400 transition-colors">
                  (781) 654-5879
                </a>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Linkedin className="h-4 w-4 text-sky-500" />
                <a href="https://www.linkedin.com/in/dmitrykuravskiy/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} GeoStellar. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2 md:mt-0">
            Precision Engineering. Sustainable Future.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
