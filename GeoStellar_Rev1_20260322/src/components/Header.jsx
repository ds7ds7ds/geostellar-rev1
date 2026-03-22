import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import BorePyramid from './BorePyramid'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About & Team' },
    { path: '/blog', label: 'Insights' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-sky-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-4 py-2 text-sm bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-colors"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm ${
                  isActive(link.path) ? 'text-sky-400' : 'text-slate-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-4 py-2 text-sm bg-sky-500 text-slate-900 font-medium rounded text-center"
            >
              Get in Touch
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
