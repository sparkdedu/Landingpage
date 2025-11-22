import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0]);

  return (
    <section ref={ref} className="relative pt-32 pb-32 px-6 min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div 
          className="text-center space-y-8"
          style={{ y, opacity, willChange: "transform, opacity" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm"
              >
                <span className="text-blue-300 flex items-center gap-2">
                  <Sparkles size={16} />
                  Transforming Education Through Innovation
                </span>
              </motion.div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight">
              <span className="block" style={{ fontWeight: '800' }}>SPARKD</span>
              <span className="block mt-4">
                <span className="text-white" style={{ fontWeight: '700' }}>Ignite Your</span>{' '}
                <span 
                  className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"
                  style={{ fontWeight: '800' }}
                >
                  Potential
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Personalised tutoring and exam preparation that accelerates results.
            <br />
            <span className="text-blue-300">Your journey to academic excellence starts here.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button 
              size="lg"
              className="group rounded-full px-8 py-6 text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
              style={{ backgroundColor: '#6B9FE8' }}
            >
              Get Started Today
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Orbital ring decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-32 flex items-center justify-center"
          >
            <motion.div
              className="absolute w-40 h-40 rounded-full border-2 border-blue-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ willChange: "transform" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
            </motion.div>
            <motion.div
              className="absolute w-28 h-28 rounded-full border-2 border-purple-400/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ willChange: "transform" }}
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
            </motion.div>
            <div className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-400/50" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}