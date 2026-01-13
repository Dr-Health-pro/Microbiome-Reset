'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function EmailCaptureSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // TODO: Connect to email marketing service (Mailchimp, ConvertKit, etc.)
        console.log('Email capture submitted:', formData)

        // Track submission
        if (typeof window !== 'undefined') {
            const { trackFormSubmission } = require('@/lib/analytics')
            trackFormSubmission('free_guide_download')
        }

        setSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '' })
            setSubmitted(false)
        }, 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="py-20 bg-gradient-to-br from-accent-900/20 via-navy-800 to-primary-900/20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-effect-strong p-8 md:p-12 rounded-3xl lead-form-section"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left Side - Icon and Text */}
                        <div>
                            <div className="w-24 h-24 mx-auto md:mx-0 mb-6 rounded-full bg-gradient-to-br from-accent-400 to-secondary-400 flex items-center justify-center">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Get Your Free <span className="text-gradient">Gut Health Guide</span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-6">
                                Download our comprehensive "10 Foods for a Healthy Microbiome" checklist and start your gut health journey today.
                            </p>
                            <div className="space-y-3 text-gray-400">
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Science-backed food recommendations</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Easy-to-follow guidelines</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Instant PDF download</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div>
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Check Your Email!</h3>
                                    <p className="text-gray-400">Your free guide is on its way.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="lead-name" className="block text-sm font-medium mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lead-name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-400 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="lead-email" className="block text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="lead-email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-400 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#008B8B] hover:bg-[#007373] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-accent-500/30"
                                    >
                                        Download Free Guide
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        We respect your privacy. Unsubscribe anytime. No spam, ever.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
