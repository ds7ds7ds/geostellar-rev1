import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import BorePyramid from '../components/BorePyramid'

const NotFoundPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative text-center px-4">
        {/* Pyramid icon as visual anchor */}
        <div className="flex justify-center mb-8 opacity-20">
          <BorePyramid
            size={120}
            topColor="#0ea5e9"
            lineColor="#0ea5e9"
            dotColor="#06b6d4"
            lineOpacity={0.4}
            dotOpacity={0.3}
            topOpacity={0.8}
          />
        </div>

        <h1 className="text-8xl font-light text-sky-500/30 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-all"
          >
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 hover:border-sky-500 text-white rounded transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
