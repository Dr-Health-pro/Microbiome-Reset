'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FAQ {
    question: string
    answer: string
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs: FAQ[] = [
        {
            question: "How long until I see results?",
            answer: "Most clients notice improvements within 2-4 weeks of starting the program. Initial changes like reduced bloating and improved energy often appear first, with more significant transformations occurring over 8-12 weeks as your microbiome rebalances."
        },
        {
            question: "Is this program right for me?",
            answer: "Our programs are designed for anyone experiencing gut health concerns including IBS, bloating, food sensitivities, autoimmune conditions, skin issues, or those simply wanting to optimize their health. During your free consultation, we'll assess if our approach aligns with your specific needs."
        },
        {
            question: "Do I need special testing first?",
            answer: "While comprehensive testing can provide valuable insights, it's optional and not required to start. We can begin with a thorough health assessment and symptom analysis. If testing would benefit your specific situation, we'll recommend it during your consultation."
        },
        {
            question: "What if I have dietary restrictions?",
            answer: "All our protocols are fully customizable to accommodate dietary restrictions, allergies, and personal preferences. Whether you're vegan, gluten-free, have multiple food sensitivities, or follow other dietary patterns, we'll create a plan that works for you."
        },
        {
            question: "Is this covered by insurance?",
            answer: "Our programs are private pay and not directly billed to insurance. However, many clients successfully use HSA (Health Savings Account) or FSA (Flexible Spending Account) funds for our services. We provide detailed receipts for your records."
        },
        {
            question: "What's included in the program?",
            answer: "Your program includes personalized gut health protocols, one-on-one virtual consultations with Dr. Q, customized meal and supplement guidance, access to our educational video library, progress tracking tools, ongoing email support, and all the resources you need to achieve lasting results."
        },
        {
            question: "What if it doesn't work for me?",
            answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your progress after following the program, we'll refund your investment—no questions asked. We're committed to your success and stand behind our science-backed protocols 100%."
        }
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-20 bg-navy-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Get answers to common questions about our program
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="glass-effect rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                                    {openIndex === index ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-6 pb-5"
                                >
                                    <div className="border-t border-white/10 pt-4">
                                        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
