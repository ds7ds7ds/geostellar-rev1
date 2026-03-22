import { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2
} from 'lucide-react'
import BorePyramid from '../components/BorePyramid'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/mpqygwkb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          projectType: formData.projectType,
          message: formData.message,
          _subject: `GeoStellar Contact: ${formData.projectType || 'General'} - ${formData.name}`
        })
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const subject = encodeURIComponent(`GeoStellar Inquiry: ${formData.projectType || 'General'}`)
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
        )
        window.location.href = `mailto:info@geostellar.com?subject=${subject}&body=${body}`
        setSubmitted(true)
      }
    } catch {
      const subject = encodeURIComponent(`GeoStellar Inquiry: ${formData.projectType || 'General'}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
      )
      window.location.href = `mailto:info@geostellar.com?subject=${subject}&body=${body}`
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-16">
      <section className="relative py-24 bg-slate-900 grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
          <BorePyramid size={400} topColor="#fff" lineColor="#fff" dotColor="#fff" lineOpacity={1} dotOpacity={1} topOpacity={1} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">CONTACT</h2>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Let's Talk About
              <br />
              <span className="gradient-text font-semibold">Your Project</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Whether you need engineering support for a single project or ongoing technical partnership,
              we're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-xl font-medium text-white mb-8">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Address</h4>
                    <p className="text-slate-400 text-sm">
                      394 Atkins Ave<br />
                      Stoughton, MA 02072
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+17816545879" className="text-slate-400 text-sm hover:text-sky-400 transition-colors">
                      (781) 654-5879
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:info@geostellar.com" className="text-slate-400 text-sm hover:text-sky-400 transition-colors">
                      info@geostellar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Hours</h4>
                    <p className="text-slate-400 text-sm">
                      Monday - Friday<br />
                      8:00 AM - 5:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
                <h4 className="text-sm font-semibold text-sky-400 tracking-widest mb-4">SERVICE AREA</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Serving contractors and engineering firms throughout the Northeast:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['MA', 'NH', 'RI', 'CT', 'ME', 'VT', 'NY', 'NJ'].map((state) => (
                    <span key={state} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4">Thank You!</h3>
                    <p className="text-slate-400">
                      We've received your message and will get back to you within 1-2 business days.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-medium text-white mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm text-slate-400 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm text-slate-400 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
                            placeholder="(555) 555-5555"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="projectType" className="block text-sm text-slate-400 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white focus:border-sky-500 focus:outline-none transition-colors"
                        >
                          <option value="">Select a project type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                          <option value="design">Design & Engineering Only</option>
                          <option value="qc">QC & Testing Services</option>
                          <option value="consulting">General Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      {error && (
                        <p className="text-red-400 text-sm">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full md:w-auto px-8 py-3 bg-sky-500 hover:bg-sky-400 disabled:bg-sky-500/50 disabled:cursor-not-allowed text-slate-900 font-medium rounded transition-all flex items-center justify-center"
                      >
                        {submitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 h-4 w-4" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
