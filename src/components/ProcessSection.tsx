import { motion } from "motion/react";
import { UserPlus, Target, Rocket, Award } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Free Consultation",
    description: "Share your goals and challenges with our expert team. We'll assess your needs and create a personalized plan."
  },
  {
    number: "02",
    icon: Target,
    title: "Matched with Experts",
    description: "Get paired with the perfect tutor based on your subject, level, and learning style preferences."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start Learning",
    description: "Begin your journey with interactive sessions, AI-powered tools, and comprehensive resources."
  },
  {
    number: "04",
    icon: Award,
    title: "Achieve Excellence",
    description: "Track your progress, celebrate milestones, and reach your academic goals with confidence."
  }
];

export function ProcessSection() {
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
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-sm">
              <span className="text-purple-300">How It Works</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6" style={{ fontWeight: '800' }}>
            Your Path to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Four simple steps to transform your academic journey and unlock your full potential.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute left-0 right-0 top-24 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="relative"
                >
                  {/* Number badge */}
                  <motion.div
                    className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center"
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl" />
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-4 border-white/10">
                      <span className="text-2xl text-white" style={{ fontWeight: '800' }}>
                        {step.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
                    {/* Icon */}
                    <motion.div
                      className="mb-4 inline-block"
                      whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                        <step.icon className="w-6 h-6 text-purple-300" />
                      </div>
                    </motion.div>

                    <h3 className="text-xl text-white mb-3" style={{ fontWeight: '700' }}>
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector arrow - only between steps on large screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4 text-purple-400/30">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}