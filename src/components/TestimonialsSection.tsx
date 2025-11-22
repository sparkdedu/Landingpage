import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "A-Level Student",
    content: "Sparkd transformed my approach to learning. I went from struggling with Physics to achieving an A* in my A-Levels. The personalized attention made all the difference.",
    rating: 5,
    grade: "A* in Physics"
  },
  {
    name: "Michael Chen",
    role: "GCSE Student",
    content: "The AI-powered learning tools helped me identify my weak areas and focus on what really mattered. I improved 3 grades in Mathematics in just 2 months!",
    rating: 5,
    grade: "Grade 9 in Maths"
  },
  {
    name: "Emma Williams",
    role: "University Applicant",
    content: "Thanks to Sparkd's expert tutors, I aced my entrance exams and got into my dream university. Their guidance was invaluable throughout the entire process.",
    rating: 5,
    grade: "Oxford Acceptance"
  }
];

export function TestimonialsSection() {
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
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-sm">
              <span className="text-blue-300">Student Success Stories</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6" style={{ fontWeight: '800' }}>
            Hear From Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stars
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Real students, real results. See how Sparkd has helped learners achieve their dreams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-cyan-500/20 group-hover:to-blue-500/20 rounded-3xl blur-xl transition-all duration-500" />
              
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 group-hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Quote icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ rotate: 180, scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <Quote className="w-10 h-10 text-blue-400/50" />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/70 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Achievement badge */}
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                    <span className="text-blue-300 text-sm" style={{ fontWeight: '600' }}>
                      {testimonial.grade}
                    </span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white text-xl" style={{ fontWeight: '700' }}>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white" style={{ fontWeight: '600' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-white/50 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-blue-400/50" />
                <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-cyan-400/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}