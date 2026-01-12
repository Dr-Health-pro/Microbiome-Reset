'use client'

import { motion } from 'framer-motion'
import Breadcrumb from '@/components/Breadcrumb'

export default function PrivacyPolicy() {
    return (
        <div className="pt-20">
            {/* Breadcrumb */}
            <Breadcrumb currentPage="Privacy Policy" />

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
                            Privacy <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Your privacy and data security are our top priorities
                        </p>
                        <p className="text-sm text-gray-400 mt-4">Last Updated: January 12, 2026</p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-effect p-8 md:p-12 rounded-3xl space-y-8">

                        {/* Introduction */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Introduction</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Microbiome Reset ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Information We Collect</h2>
                            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We may collect personal information that you voluntarily provide when using our services, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                <li>Name, email address, and contact information</li>
                                <li>Health history and symptom information</li>
                                <li>Payment and billing information</li>
                                <li>Communication preferences</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">Health Information</h3>
                            <p className="text-gray-300 leading-relaxed">
                                As a health-related service, we collect and process health information you provide through questionnaires, consultations, and communications. This information is protected under applicable health privacy laws, including HIPAA where applicable.
                            </p>
                        </div>

                        {/* How We Use Your Information */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">How We Use Your Information</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                <li>Provide personalized microbiome reset programs and recommendations</li>
                                <li>Process payments and manage your account</li>
                                <li>Communicate with you about your program and our services</li>
                                <li>Improve our services and develop new programs</li>
                                <li>Comply with legal obligations</li>
                                <li>Detect and prevent fraud or unauthorized access</li>
                            </ul>
                        </div>

                        {/* Cookie Usage */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Cookies and Tracking Technologies</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and personalize content. You can control cookie preferences through your browser settings.
                            </p>
                        </div>

                        {/* Data Protection */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Data Protection and Security</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We implement industry-standard security measures to protect your personal and health information from unauthorized access, disclosure, alteration, or destruction. This includes encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Third-Party Services */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Third-Party Services</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                <li>Payment processors</li>
                                <li>Email service providers</li>
                                <li>Analytics providers</li>
                                <li>Cloud storage providers</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                These third parties are contractually obligated to protect your information and use it only for the purposes we specify.
                            </p>
                        </div>

                        {/* HIPAA Compliance */}
                        <div className="bg-accent-500/10 p-6 rounded-xl border border-accent-400/20">
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">HIPAA Compliance Notice</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Where applicable, we comply with the Health Insurance Portability and Accountability Act (HIPAA) and implement appropriate safeguards to protect your protected health information (PHI). We will not use or disclose your health information without your authorization, except as permitted or required by law.
                            </p>
                        </div>

                        {/* Your Rights */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Your Privacy Rights</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                <li>Access and review your personal information</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Restrict or object to certain processing activities</li>
                                <li>Request a copy of your information</li>
                            </ul>
                        </div>

                        {/* Data Retention */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Data Retention</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We retain your personal and health information for as long as necessary to provide our services and comply with legal obligations. When information is no longer needed, we securely delete or anonymize it.
                            </p>
                        </div>

                        {/* Children's Privacy */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Children's Privacy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </div>

                        {/* Changes to Policy */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Changes to This Policy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-primary-500/10 p-6 rounded-xl border border-primary-400/20">
                            <h2 className="text-3xl font-bold mb-4 text-accent-400">Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <div className="text-gray-300 space-y-2">
                                <p><strong>Email:</strong> privacy@microbiome-reset.com</p>
                                <p><strong>Address:</strong> Privacy Officer, Microbiome Reset</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
