'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GuaranteeSection() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-effect-strong p-8 md:p-12 rounded-3xl border-2 border-green-500/40 guarantee-section"
                >
                    <div className="text-center mb-8">
                        {/* Shield Icon */}
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 mb-6">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Your Risk-Free <span className="text-gradient">Guarantee</span>
                        </h2>

                        <div className="inline-block bg-green-500/20 border-2 border-green-500/50 px-6 py-3 rounded-full mb-6">
                            <p className="text-2xl font-bold text-green-400">30-Day Money-Back Guarantee</p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4 mb-10 text-center">
                        <p className="text-xl text-gray-300">
                            Try our program completely risk-free for 30 days
                        </p>
                        <p className="text-lg text-gray-400">
                            If you're not satisfied with your progress, we'll refund your investment—no questions asked
                        </p>
                        <p className="text-lg text-gray-400">
                            We're committed to your success and stand behind our science-backed protocols
                        </p>
                    </div>

                    <div className="border-t border-white/20 pt-10">
                        <h3 className="text-2xl font-bold text-center mb-8 text-accent-400">What You Get:</h3>

                        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {[
                                'Personalized gut health protocol',
                                'One-on-one virtual consultations',
                                'Educational video library access',
                                'Progress tracking tools',
                                'Ongoing email support',
                                'Money-back guarantee'
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg"
                                >
                                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-300">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="/packages"
                            className="inline-block bg-[#008B8B] hover:bg-[#006666] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            View Packages
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
