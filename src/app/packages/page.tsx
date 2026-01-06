'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Packages() {
  const packages = [
    {
      name: 'Basic',
      price: '$297',
      duration: '4 weeks',
      description: 'Perfect for beginners looking to improve their gut health',
      features: [
        'Initial health assessment',
        'Personalized nutrition guide',
        'Supplement recommendations',
        'Weekly email support',
        'Educational resources library',
        'Basic gut health protocols'
      ],
      highlighted: false,
      gradient: 'from-primary-500 to-primary-700'
    },
    {
      name: 'Advanced',
      price: '$597',
      duration: '8 weeks',
      description: 'Comprehensive program for significant health transformation',
      features: [
        'Everything in Basic, plus:',
        '2 one-on-one video consultations',
        'Advanced testing recommendations',
        'Customized meal plans',
        'Bi-weekly progress check-ins',
        'Private messaging access',
        'Advanced intervention protocols',
        'Stress & lifestyle optimization'
      ],
      highlighted: true,
      gradient: 'from-accent-400 to-secondary-400',
      badge: 'Most Popular'
    },
    {
      name: 'Premium',
      price: '$997',
      duration: '12 weeks',
      description: 'Elite program with maximum support and customization',
      features: [
        'Everything in Advanced, plus:',
        '4 one-on-one video consultations',
        'Comprehensive lab work analysis',
        'Weekly personal coaching calls',
        '24/7 messaging support',
        'Custom supplement protocol',
        'Advanced functional medicine approach',
        'Long-term maintenance plan',
        'Lifetime resource access'
      ],
      highlighted: false,
      gradient: 'from-secondary-500 to-secondary-700'
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
              Choose Your <span className="text-gradient">Reset Package</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Select the program that best fits your health goals and commitment level
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${pkg.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-accent-400 to-secondary-400 px-4 py-1 rounded-full text-sm font-bold text-navy-900">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div
                  className={`glass-effect rounded-3xl p-8 h-full flex flex-col ${
                    pkg.highlighted
                      ? 'border-2 border-accent-400 glow-effect'
                      : 'border border-white/10'
                  } hover:bg-white/10 transition-all duration-300`}
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                        {pkg.price}
                      </span>
                      <span className="text-gray-400 text-lg">/{pkg.duration}</span>
                    </div>
                    <p className="text-gray-400">{pkg.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-6">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <svg
                            className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className={feature.includes('Everything in') ? 'font-semibold text-accent-400' : ''}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`block text-center py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-accent-400 to-secondary-400 text-navy-900 hover:shadow-xl hover:shadow-accent-400/50 transform hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="glass-effect inline-block px-8 py-4 rounded-2xl">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-3xl">✅</span>
                <div className="text-left">
                  <p className="font-bold text-lg">30-Day Money-Back Guarantee</p>
                  <p className="text-gray-400">Not satisfied? Get a full refund, no questions asked</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              What's <span className="text-gradient">Included</span>
            </h2>
            <p className="text-xl text-gray-400">All programs include access to our comprehensive resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: 'Educational Resources',
                description: 'Video library, guides, and research-backed articles'
              },
              {
                icon: '🎯',
                title: 'Action Plans',
                description: 'Step-by-step protocols tailored to your needs'
              },
              {
                icon: '📊',
                title: 'Progress Tracking',
                description: 'Tools to monitor your improvements over time'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How quickly will I see results?',
                answer: 'Many clients report improvements in energy and digestion within 2-3 weeks. Significant microbiome changes typically occur over 4-8 weeks of consistent intervention.'
              },
              {
                question: 'Is this program suitable for everyone?',
                answer: 'Our programs are designed for adults looking to optimize their gut health. We recommend consulting with your healthcare provider if you have serious medical conditions.'
              },
              {
                question: 'What if I need to pause my program?',
                answer: 'Life happens! Contact us and we can arrange to pause your program and extend your access accordingly.'
              },
              {
                question: 'Do I need lab testing?',
                answer: 'Lab testing is recommended but not required. The Advanced and Premium packages include guidance on appropriate testing options.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-3 text-accent-400">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-microbiome">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a free 15-minute consultation to discuss which package is right for you
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
