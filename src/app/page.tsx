'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import VideoSection from '@/components/VideoSection'
import EmailCaptureSection from '@/components/EmailCaptureSection'
import FAQSection from '@/components/FAQSection'
import GuaranteeSection from '@/components/GuaranteeSection'
import ComparisonSection from '@/components/ComparisonSection'
import SocialProofCounters from '@/components/SocialProofCounters'
import ScrollProgress from '@/components/ScrollProgress'
import { OrganizationSchema, ServiceSchema, FAQSchema } from '@/components/Schema'

export default function Home() {
  // SVG Icon Components
  const MicroscopeIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )

  const ComputerIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )

  const TargetIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  const ChartIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )

  const features = [
    {
      icon: <MicroscopeIcon />,
      title: 'Science-Backed',
      description: 'Evidence-based protocols developed from cutting-edge microbiome research'
    },
    {
      icon: <ComputerIcon />,
      title: '100% Virtual',
      description: 'Access your personalized program from anywhere in the world'
    },
    {
      icon: <TargetIcon />,
      title: 'Personalized Plans',
      description: 'Tailored interventions based on your unique health profile'
    },
    {
      icon: <ChartIcon />,
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
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Version Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-navy-900/95 via-primary-900/95 to-navy-900/95 backdrop-blur-md border-b border-accent-400/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center">
            <span className="text-xs md:text-sm font-semibold text-accent-400 tracking-wider">
              VERSION 2.0
            </span>
          </div>
        </div>
      </div>

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
              <span className="text-gradient">Transform Your Gut Health</span>
              <br />
              <span className="text-white">in 30 Days - Guaranteed</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              RN-led virtual programs to optimize your microbiome and experience improved digestion, energy, and mental clarity in weeks, not months
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/packages"
                className="bg-[#008B8B] hover:bg-[#006666] text-white min-h-[50px] md:min-h-[60px] px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/about"
                className="glass-effect px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Badges Row */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { label: 'RN-Led Programs', icon: '🏥' },
                { label: 'HIPAA Compliant', icon: '🔒' },
                { label: 'Evidence-Based', icon: '🔬' },
                { label: 'Serving 40+ States', icon: '🗺️' }
              ].map((badge, index) => (
                <div
                  key={index}
                  className="trust-badge flex items-center space-x-2 px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-sm font-semibold text-gray-300">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* 30-Day Guarantee Badge */}
            <div className="mt-6 flex justify-center">
              <div className="guarantee-badge border-2 border-green-400/50 px-6 py-3 rounded-2xl flex items-center space-x-3 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-2xl">🛡️</div>
                <span className="text-white font-semibold text-lg">Risk-Free 30-Day Money-Back Guarantee</span>
              </div>
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
                <div className="text-accent-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-accent-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
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
              Is This Program <span className="text-gradient">Right For You?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our programs are designed for people experiencing:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Digestive Issues',
                description: 'Bloating, IBS, constipation, or irregular bowel movements affecting daily life'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Low Energy & Brain Fog',
                description: 'Chronic fatigue, difficulty concentrating, or mental fog throughout the day'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Autoimmune Concerns',
                description: 'Managing autoimmune conditions or chronic inflammation'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Optimal Wellness',
                description: 'Looking to optimize overall health and prevent future issues'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: 'Post-Antibiotic Recovery',
                description: 'Restoring gut balance after antibiotic use or medical treatments'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: 'Preventive Health',
                description: 'Proactive approach to maintaining long-term gut and overall health'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-accent-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Dr. Q Section */}
      <section className="py-20 bg-navy-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 md:p-12 rounded-3xl text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Meet <span className="text-gradient">Dr. Q</span>
            </h2>

            {/* Photo Placeholder */}
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-400 to-secondary-400 flex items-center justify-center overflow-hidden">
              <span className="text-8xl">👨‍⚕️</span>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                Dr. Q is a registered nurse and functional medicine practitioner with an RN Compact License, enabling him to provide virtual consultations across 40+ U.S. states.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                As founder of Pittsburgh Integrative, he combines clinical expertise with personalized gut health protocols.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                His mission: help clients worldwide achieve optimal wellness through evidence-based microbiome optimization.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-block bg-gradient-to-r from-accent-500 to-primary-500 px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-accent-500/50 transition-all duration-300"
            >
              Learn More About Dr. Q
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Credentials & <span className="text-gradient">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'RN-Led Programs', icon: '🏥' },
              { label: 'Functional Medicine Certified', icon: '🔬' },
              { label: 'Serving 40+ States', icon: '🗺️' },
              { label: 'HIPAA Compliant', icon: '🔒' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-semibold text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Counters */}
      <SocialProofCounters />

      {/* Comparison Section */}
      <ComparisonSection />

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

      {/* How It Works Section */}
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
              Your Journey to <span className="text-gradient">Gut Health</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A simple, proven 5-step process to transform your microbiome
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '1',
                title: 'Book Free Consultation',
                description: '15-minute health assessment to understand your needs',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                step: '2',
                title: 'Get Your Plan',
                description: 'Personalized protocol based on your health profile',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                step: '3',
                title: 'Implement Protocol',
                description: 'Follow science-backed interventions at your pace',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2 a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )
              },
              {
                step: '4',
                title: 'Track Progress',
                description: 'Monitor improvements with ongoing support',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                step: '5',
                title: 'Achieve Results',
                description: 'Experience lasting gut health transformation',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center"
              >
                {/* Arrow connector (hidden on last item and mobile) */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-400 to-secondary-400 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-navy-900">{item.step}</span>
                  </div>
                  <div className="text-accent-400 mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real results from real people transforming their gut health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "After 4 weeks, my bloating disappeared and my energy levels doubled. This program truly transformed my gut health!",
                name: "Maria R.",
                result: "Improved Digestion & Energy"
              },
              {
                quote: "I've struggled with digestive issues for years. The personalized protocol finally gave me the relief I was looking for.",
                name: "John D.",
                result: "Reduced Inflammation"
              },
              {
                quote: "The science-backed approach and virtual support made it easy to stick with the program. I feel better than I have in a decade!",
                name: "Sarah M.",
                result: "Enhanced Overall Wellness"
              },
              {
                quote: "My mood and mental clarity improved dramatically. I didn't realize how connected my gut health was to everything else!",
                name: "David K.",
                result: "Better Mood & Focus"
              },
              {
                quote: "The 30-day guarantee gave me confidence to try it. Best health decision I've made this year!",
                name: "Lisa T.",
                result: "Optimized Gut Function"
              },
              {
                quote: "I was skeptical at first, but within 6 weeks my IBS symptoms were gone and I finally felt like myself again. The personalized approach made all the difference!",
                name: "David K.",
                result: "Eliminated IBS Symptoms"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-accent-400">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Email Capture Lead Magnet */}
      <EmailCaptureSection />

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
              className="inline-block bg-[#008B8B] hover:bg-[#006666] text-white min-h-[50px] md:min-h-[60px] px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD Schema Markup */}
      <OrganizationSchema />
      <ServiceSchema />
      <FAQSchema />
    </div>
  )
}
