import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-[3rem] p-12 md:p-16 overflow-hidden"
        >
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center space-y-8">
            {/* Floating sparkles */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  y: [0, -8, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30"
              >
                <Sparkles className="w-8 h-8 text-blue-300" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ fontWeight: '800' }}>
                Ready to Start Your{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Success Story?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Join thousands of students who've transformed their academic journey.
                <br />
                <span className="text-blue-300">Your free consultation is just one click away.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="group rounded-full px-10 py-7 text-xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300"
                  style={{ backgroundColor: '#6B9FE8' }}
                >
                  <Calendar className="w-6 h-6 mr-2" />
                  Book Free Consultation
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="group rounded-full px-10 py-7 text-xl bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm pt-8"
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>1000+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-blue-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-purple-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
                <span>Money-Back Guarantee</span>
              </div>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div 
            className="absolute top-8 right-8 w-3 h-3 rounded-full bg-blue-400/50"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-purple-400/50"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        {/* Footer section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20 pb-12 text-white/40"
        >
          <p className="mb-4">© 2025 SPARKD. Igniting Excellence in Education.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}