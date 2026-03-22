import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  Users,
  Target,
  Globe,
  Linkedin,
  Mail,
  HardHat,
  Wrench,
  ClipboardCheck
} from 'lucide-react'
import BorePyramid from '../components/BorePyramid'

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision",
      description: "Every measurement, every calculation, every detail matters. We bring O&G-grade accuracy to geothermal."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We don't cut corners. Our standards are high because your projects deserve nothing less."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Partnership",
      description: "We work alongside contractors and engineers, not above them. Your success is our success."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Sustainability",
      description: "Geothermal is the future. We're committed to accelerating clean energy adoption through technical excellence."
    }
  ]

  const team = [
    {
      role: "Principal Engineer",
      background: "Oil & Gas Field Operations",
      icon: <HardHat className="h-8 w-8" />,
      experience: "15+ years",
      bio: "Extensive experience in offshore and onshore O&G field operations, wellsite supervision, and drilling engineering. Brings rigorous field standards to every geothermal project.",
      specialties: ["Field Operations", "Drilling Supervision", "QA/QC Protocols", "Safety Management"]
    },
    {
      role: "Senior Engineer",
      background: "Oil & Gas Engineering",
      icon: <Wrench className="h-8 w-8" />,
      experience: "12+ years",
      bio: "Deep expertise in O&G systems engineering, optimization, and performance analysis. Specializes in translating complex technical requirements into efficient, reliable solutions.",
      specialties: ["Systems Engineering", "Performance Optimization", "Technical Analysis", "Process Design"]
    },
    {
      role: "Licensed Professional Engineer (PE)",
      background: "Mechanical Engineering",
      icon: <ClipboardCheck className="h-8 w-8" />,
      experience: "10+ years",
      bio: "Massachusetts-licensed PE with expertise in thermal systems, HVAC integration, and geothermal design. Ensures all projects meet code requirements and engineering best practices.",
      specialties: ["PE Stamping", "Thermal Systems", "Code Compliance", "Geothermal Design"]
    }
  ]

  const milestones = [
    { year: "2010", event: "Oil & gas field experience begins — operations on rigs", highlight: false },
    { year: "2015", event: "Engineering and optimization expertise developed", highlight: false },
    { year: "2022", event: "Transition to geothermal: design, build, execution", highlight: false },
    { year: "2026", event: "GeoStellar founded — O&G precision meets geothermal", highlight: true }
  ]

  const stats = [
    { value: "16+", label: "Years Combined Experience" },
    { value: "3", label: "Core Team Members" },
    { value: "2", label: "O&G Veterans" },
    { value: "1", label: "Licensed PE" }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        {/* Decorative pyramid watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
          <BorePyramid size={400} topColor="#fff" lineColor="#fff" dotColor="#fff" lineOpacity={1} dotOpacity={1} topOpacity={1} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">ABOUT US</h2>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              O&G Expertise Meets
              <br />
              <span className="gradient-text font-semibold">Sustainable Energy</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              GeoStellar was founded by oil & gas industry veterans who saw the opportunity
              to bring world-class engineering standards to the rapidly growing geothermal sector.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-light text-sky-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">OUR JOURNEY</h2>
              <h3 className="text-3xl font-light text-white mb-6">
                From Oilfields to Ground Loops
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Our journey began in <span className="text-white">2010 on oil & gas rigs</span> — learning 
                  firsthand why precision, safety, and quality control aren't just nice-to-haves in high-stakes 
                  environments. They're survival.
                </p>
                <p>
                  By <span className="text-white">2015</span>, we were deep into engineering and optimization, 
                  developing the technical discipline that would later define our approach to every project.
                </p>
                <p>
                  In <span className="text-white">2022</span>, we saw the opportunity: geothermal needed the 
                  same rigor we'd built in O&G. We began designing, building, and executing geothermal systems 
                  with industry-leading standards.
                </p>
                <p>
                  <span className="text-sky-400 font-medium">2026 marks the founding of GeoStellar</span> — 
                  bringing everything together into a consultancy dedicated to making O&G-grade precision 
                  the standard in geothermal, not the exception.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-8">
              <h4 className="text-sm font-semibold text-sky-400 tracking-widest mb-6">OUR EXPERTISE TIMELINE</h4>
              <div className="space-y-6">
                {milestones.map((m, index) => (
                  <div key={index} className={`flex items-start ${m.highlight ? 'pl-4 border-l-2 border-sky-500' : ''}`}>
                    <div className={`font-mono text-sm w-16 flex-shrink-0 ${m.highlight ? 'text-sky-400 font-semibold' : 'text-sky-500'}`}>
                      {m.year}
                    </div>
                    <div className={`text-sm ${m.highlight ? 'text-white font-medium' : 'text-slate-300'}`}>
                      {m.event}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-xs text-slate-500 italic">
                  GeoStellar is new. Our expertise is not.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">OUR VALUES</h2>
            <p className="text-3xl md:text-4xl font-light text-white">
              What Drives Us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all hover-lift"
              >
                <div className="text-sky-500 mb-4">{value.icon}</div>
                <h3 className="text-lg font-medium text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">THE TEAM</h2>
            <p className="text-3xl md:text-4xl font-light text-white mb-4">
              Industry Veterans. Technical Experts.
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A focused team combining oil & gas field experience with licensed engineering expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-950/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all hover-lift"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-full mb-6 flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                  {member.icon}
                </div>
                
                <h3 className="text-xl font-medium text-white mb-1">{member.role}</h3>
                <p className="text-sky-400 text-sm mb-1">{member.background}</p>
                <p className="text-slate-500 text-xs mb-4">{member.experience}</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((spec, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">LOCATION</h2>
              <h3 className="text-3xl font-light text-white mb-6">
                Based in Massachusetts,
                <br />
                <span className="gradient-text font-semibold">Serving the Northeast</span>
              </h3>
              <div className="space-y-4 text-slate-400">
                <p>
                  <span className="text-white">394 Atkins Ave</span><br />
                  Stoughton, MA 02072
                </p>
                <p>
                  <span className="text-white">(781) 654-5879</span>
                </p>
                <p className="text-sm">
                  Strategically located to serve contractors and engineering firms 
                  throughout New England and the greater Northeast region.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8">
              <h4 className="text-sm font-semibold text-sky-400 tracking-widest mb-4">SERVICE AREA</h4>
              <div className="grid grid-cols-2 gap-4">
                {["Massachusetts", "New Hampshire", "Rhode Island", "Connecticut", "Maine", "Vermont", "New York", "New Jersey"].map((state, index) => (
                  <div key={index} className="flex items-center text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-2" />
                    {state}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sky-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Join the contractors and engineering firms who trust GeoStellar for their 
            geothermal engineering needs.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-all hover:shadow-lg hover:shadow-sky-500/25"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
