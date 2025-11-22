import { motion } from "motion/react";
import { TrendingUp, Award, Users, Target } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "95%",
    label: "Exam Success Rate",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    value: "2+",
    label: "Grade Improvement Average",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    value: "1000+",
    label: "Students Empowered",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Target,
    value: "98%",
    label: "Goal Achievement Rate",
    color: "from-cyan-500 to-blue-500"
  }
];

export function StatsSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-4" style={{ fontWeight: '800' }}>
            Proven <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Our data speaks for itself. Join thousands of successful students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-6">
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <div
                      className="text-5xl md:text-6xl bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent"
                      style={{ fontWeight: '800' }}
                    >
                      {stat.value}
                    </div>
                    
                    <p className="text-white/70 text-sm leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </div>

                {/* Animated corner elements */}
                <motion.div 
                  className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-400/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <motion.div 
                  className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-purple-400/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 + index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}