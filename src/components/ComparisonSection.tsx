'use client'

import { motion } from 'framer-motion'

export default function ComparisonSection() {
    const comparisons = [
        {
            traditional: "Generic protocols",
            microbiomeReset: "Personalized plans based on YOUR health"
        },
        {
            traditional: "Group programs",
            microbiomeReset: "One-on-one virtual consultations"
        },
        {
            traditional: "Limited support",
            microbiomeReset: "Ongoing guidance and email support"
        },
        {
            traditional: "Cookie-cutter advice",
            microbiomeReset: "RN-led clinical expertise"
        },
        {
            traditional: "Local only",
            microbiomeReset: "Available nationwide (40+ states)"
        },
        {
            traditional: "No guarantees",
            microbiomeReset: "30-day money-back guarantee"
        }
    ]

    return (
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
                        Why Choose <span className="text-gradient">Microbiome Reset?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        See how our approach differs from traditional programs
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Traditional Approach Column */}
                    <div>
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-400">Traditional Approach</h3>
                        </div>
                        <div className="space-y-4">
                            {comparisons.map((item, index) => (
                                <motion.div
                                    key={`traditional-${index}`}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-effect p-4 rounded-xl comparison-card-negative"
                                >
                                    <div className="flex items-start space-x-3">
                                        <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <span className="text-gray-400">{item.traditional}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Microbiome Reset Column */}
                    <div>
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-accent-400">Microbiome Reset Approach</h3>
                        </div>
                        <div className="space-y-4">
                            {comparisons.map((item, index) => (
                                <motion.div
                                    key={`reset-${index}`}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-effect-strong p-4 rounded-xl comparison-card-positive"
                                >
                                    <div className="flex items-start space-x-3">
                                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-300 font-medium">{item.microbiomeReset}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
