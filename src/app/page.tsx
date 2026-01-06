'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import VideoSection from '@/components/VideoSection'

export default function Home() {
  const features = [
    {
      icon: '🔬',
      title: 'Science-Backed',
      description: 'Evidence-based protocols developed from cutting-edge microbiome research'
    },
    {
      icon: '💻',
      title: '100% Virtual',
      description: 'Access your personalized program from anywhere in the world'
    },
    {
      icon: '🎯',
      title: 'Personalized Plans',
      description: 'Tailored interventions based on your unique health profile'
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'Monitor your improvements with detailed health metrics'
    }
  ]

  const benefits = [
    'Improved digestion and gut health',
    'Enhanced immune function',
    'Better mood and mental clarity',
    'Increased energy levels',
    'Reduced inflammation',
    'Optimized nutrient absorption'
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-microbiome">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Microbiome Reset</span>
              <br />
              <span className="text-white">Transform Your Gut Health</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Science-backed virtual programs to optimize your gut microbiome and unlock your body's full potential
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/packages"
                className="bg-gradient-to-r from-accent-500 to-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-accent-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Programs
              </Link>
              <Link
                href="/about"
                className="glass-effect px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Floating Bacteria Animation */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="flex justify-center gap-8">
              {['🦠', '🧫', '🔬'].map((emoji, i) => (
                <motion.div
                  key={i}
                  className="text-6xl"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-accent-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
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
              Why <span className="text-gradient">Microbiome Reset?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A revolutionary approach to gut health optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-accent-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience the <span className="text-gradient">Benefits</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                A healthy gut microbiome is the foundation of overall wellness. Our programs help you achieve:
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect p-8 rounded-3xl glow-effect">
                <div className="aspect-square bg-gradient-microbiome rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🦠</div>
                    <p className="text-2xl font-bold text-gradient">Your Gut Ecosystem</p>
                    <p className="text-gray-400 mt-2">Trillions of beneficial bacteria</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

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
              Ready to Reset Your Microbiome?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the program that fits your health goals
            </p>
            <Link
              href="/packages"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              View Packages
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
