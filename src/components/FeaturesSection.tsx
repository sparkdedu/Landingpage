import { motion } from "motion/react";
import { Brain, Users, LineChart, Zap, BookOpen, Trophy } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Orion AI adapts to your learning style, providing personalized recommendations and insights.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Expert Tutors",
    description: "Learn from award-winning educators who are passionate about your success.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: LineChart,
    title: "Track Progress",
    description: "Real-time analytics and detailed reports to monitor your academic growth.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "See measurable improvements in as little as 4 weeks with our proven methods.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Resources",
    description: "Access thousands of practice materials, past papers, and study guides.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Trophy,
    title: "Exam Excellence",
    description: "Specialized preparation for GCSEs, A-Levels, and university entrance exams.",
    gradient: "from-pink-500 to-purple-500"
  }
];

export function FeaturesSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm">
              <span className="text-blue-300">Why Choose Sparkd</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6" style={{ fontWeight: '800' }}>
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Excel
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            A complete ecosystem designed to transform your learning experience and help you achieve your academic goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative h-full"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-3xl blur-xl transition-all duration-500" />
                
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 group-hover:border-white/20 transition-all duration-300 h-full">
                  <div className="space-y-6">
                    {/* Icon */}
                    <motion.div
                      className="relative w-fit"
                      whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                      <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${feature.gradient}`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl text-white" style={{ fontWeight: '700' }}>
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Learn more link */}
                    <motion.div
                      className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    >
                      <span className="text-sm">Learn more</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Decorative corner dots */}
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-blue-400/50" />
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-purple-400/50" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}