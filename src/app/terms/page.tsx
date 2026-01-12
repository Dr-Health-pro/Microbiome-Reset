'use client'

import { motion } from 'framer-motion'
import Breadcrumb from '@/components/Breadcrumb'

export default function Terms() {
    return (
        <div className="pt-20">
            {/* Breadcrumb */}
            <Breadcrumb currentPage="Terms of Service" />

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
                            Terms of <span className="text-gradient">Service</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Please read these terms carefully before using our services
                        </p>
                        <p className="text-sm text-gray-400 mt-4">Last Updated: January 12, 2026</p>
                    </motion.div>
                </div>
            </section>

            {/* Medical Disclaimer Banner */}
            <section className="py-6 bg-yellow-500/10 border-y border-yellow-500/20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start space-x-3">
                        <div className="text-2xl">⚠️</div>
                        <div>
                            <h3 className="font-bold text-yellow-400 mb-1">Important Medical Disclaimer</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                The information and programs provided by Microbiome Reset are for educational purposes only and are not intended as medical advice. Always consult with a qualified healthcare professional before starting any new health program or making changes to your diet or lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-effect p-8 md:p-12 rounded-3xl space-y-8">

                        {/* Agreement to Terms */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Agreement to Terms</h2>
                            <p className="text-gray-300 leading-relaxed">
                                By accessing or using Microbiome Reset's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                            </p>
                        </div>

                        {/* Service Description */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Service Description</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Microbiome Reset provides virtual gut health optimization programs, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                <li>Personalized microbiome reset protocols</li>
                                <li>Dietary and lifestyle recommendations</li>
                                <li>Supplement guidance and protocols</li>
                                <li>Virtual consultations and support</li>
                                <li>Educational resources and materials</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Our services are delivered entirely online and do not include in-person medical care, diagnosis, or treatment.
                            </p>
                        </div>

                        {/* User Responsibilities */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">User Responsibilities</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                As a user of our services, you agree to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                <li>Provide accurate and complete health information</li>
                                <li>Consult with your healthcare provider before implementing our recommendations</li>
                                <li>Follow program guidelines as provided</li>
                                <li>Not share your account credentials with others</li>
                                <li>Use our services only for lawful purposes</li>
                                <li>Respect intellectual property rights</li>
                            </ul>
                        </div>

                        {/* Medical Disclaimer */}
                        <div className="bg-red-500/10 p-6 rounded-xl border border-red-400/20">
                            <h2 className="text-3xl font-bold mb-4 text-red-400">Disclaimer of Medical Advice</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong>THIS IS NOT MEDICAL ADVICE.</strong> Microbiome Reset does not provide medical diagnosis, treatment, or care. Our programs are educational and designed to support overall wellness through lifestyle and dietary interventions.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                You should always:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                <li>Consult with a qualified healthcare professional before starting any new health program</li>
                                <li>Seek immediate medical attention for any urgent or serious health concerns</li>
                                <li>Continue following your doctor's prescribed treatments and medications</li>
                                <li>Inform your healthcare provider about any changes you make to your diet or lifestyle</li>
                            </ul>
                        </div>

                        {/* 30-Day Money-Back Guarantee */}
                        <div className="bg-accent-500/10 p-6 rounded-xl border border-accent-400/20">
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">30-Day Money-Back Guarantee</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We stand behind our programs with a 30-day money-back guarantee. If you are not completely satisfied with your program within the first 30 days of purchase, contact us for a full refund.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                To request a refund:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                <li>Contact us at refunds@microbiome-reset.com within 30 days of purchase</li>
                                <li>Provide your order number and brief reason for refund</li>
                                <li>Refunds will be processed within 5-7 business days</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4 text-sm">
                                Note: Refunds apply to program fees only. Any third-party products or supplements purchased separately are not covered by this guarantee.
                            </p>
                        </div>

                        {/* Intellectual Property */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Intellectual Property Rights</h2>
                            <p className="text-gray-300 leading-relaxed">
                                All content provided through Microbiome Reset, including text, graphics, logos, protocols, and software, is the property of Microbiome Reset or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Limitation of Liability</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                To the fullest extent permitted by law, Microbiome Reset shall not be liable for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                <li>Any indirect, incidental, special, or consequential damages</li>
                                <li>Health outcomes or results from following our programs</li>
                                <li>Interactions with supplements or dietary changes</li>
                                <li>Loss of data, revenue, or business opportunities</li>
                                <li>Actions taken based on information provided through our services</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Our maximum liability is limited to the amount you paid for our services.
                            </p>
                        </div>

                        {/* Account Termination */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Termination</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to us, other users, or third parties. You may terminate your account at any time by contacting us.
                            </p>
                        </div>

                        {/* Payment Terms */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Payment and Billing</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Payment terms:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                <li>All fees are in USD unless otherwise stated</li>
                                <li>Payment is required at the time of purchase</li>
                                <li>For subscription programs, you authorize recurring charges</li>
                                <li>You are responsible for all taxes and fees</li>
                                <li>Prices are subject to change with notice</li>
                            </ul>
                        </div>

                        {/* Privacy */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Privacy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Your use of our services is also governed by our Privacy Policy. Please review our <a href="/privacy-policy" className="text-accent-400 hover:text-accent-300 underline">Privacy Policy</a> to understand how we collect, use, and protect your information.
                            </p>
                        </div>

                        {/* Governing Law */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Governing Law</h2>
                            <p className="text-gray-300 leading-relaxed">
                                These Terms of Service are governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration.
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Changes to Terms</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We reserve the right to modify these Terms of Service at any time. We will notify users of material changes by posting an update on our website. Your continued use of our services after changes become effective constitutes acceptance of the modified terms.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-primary-500/10 p-6 rounded-xl border border-primary-400/20">
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                If you have questions about these Terms of Service, please contact us:
                            </p>
                            <div className="text-gray-300 space-y-2">
                                <p><strong>Email:</strong> support@microbiome-reset.com</p>
                                <p><strong>Refunds:</strong> refunds@microbiome-reset.com</p>
                                <p><strong>General Inquiries:</strong> info@microbiome-reset.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
