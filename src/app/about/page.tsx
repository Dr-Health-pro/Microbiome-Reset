'use client'

import { motion } from 'framer-motion'

export default function About() {
  const scientificPrinciples = [
    {
      title: 'Microbiome Diversity',
      description: 'A diverse gut microbiome is essential for optimal health. We focus on increasing bacterial diversity through targeted interventions.',
      icon: '🧬'
    },
    {
      title: 'Gut-Brain Axis',
      description: 'The connection between your gut and brain affects mood, cognition, and mental health. Our protocols support this vital pathway.',
      icon: '🧠'
    },
    {
      title: 'Immune Modulation',
      description: '70% of your immune system resides in your gut. We help restore immune balance through microbiome optimization.',
      icon: '🛡️'
    },
    {
      title: 'Metabolic Health',
      description: 'Gut bacteria influence metabolism, weight management, and energy production. Our programs target metabolic optimization.',
      icon: '⚡'
    }
  ]

  const ourApproach = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive health questionnaire and analysis of your current gut health status'
    },
    {
      step: '02',
      title: 'Personalization',
      description: 'Custom protocol development based on your unique health profile and goals'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Guided intervention with dietary, supplemental, and lifestyle recommendations'
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Regular check-ins, progress tracking, and protocol adjustments as needed'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-microbiome">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Microbiome Reset</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Harnessing the power of your gut microbiome to transform your health from the inside out
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-400 mb-4">
                At Microbiome Reset, we believe that optimal health starts in the gut. Your microbiome—the trillions of bacteria, fungi, and other microorganisms living in your digestive tract—plays a crucial role in virtually every aspect of your health.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Modern lifestyle, stress, antibiotics, and processed foods have disrupted this delicate ecosystem for millions of people. Our mission is to help you restore balance through science-backed, personalized interventions delivered conveniently online.
              </p>
              <p className="text-lg text-gray-400">
                We combine cutting-edge microbiome research with practical, sustainable protocols to help you achieve lasting health improvements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-3xl"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
                    <p className="text-gray-400">Every microbiome is unique. Our protocols are tailored to your individual needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🔬</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Evidence-Based</h3>
                    <p className="text-gray-400">All recommendations backed by peer-reviewed scientific research.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🌍</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Accessible Worldwide</h3>
                    <p className="text-gray-400">100% virtual consultations and support from anywhere.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scientific Principles */}
      <section className="py-20 bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Scientific Foundation</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our programs are built on four key principles of microbiome science
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scientificPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-accent-400">{principle.title}</h3>
                <p className="text-gray-400 text-lg">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">4-Step Approach</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A systematic process designed for optimal results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourApproach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-effect p-6 rounded-2xl h-full hover:bg-white/10 transition-all duration-300">
                  <div className="text-6xl font-bold text-gradient mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < ourApproach.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent-400 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-microbiome">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our packages and find the perfect program for your health goals
            </p>
            <a
              href="/packages"
              className="inline-block bg-[#008B8B] hover:bg-[#006666] text-white min-h-[50px] md:min-h-[60px] px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
