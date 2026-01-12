'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    useEffect(() => {
        // Check if previously dismissed in this session
        const dismissed = sessionStorage.getItem('stickyCtaDismissed')
        if (dismissed) {
            setIsDismissed(true)
            return
        }

        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

            // Show after scrolling 50% down the page
            if (scrollPercent > 50 && !isDismissed) {
                setIsVisible(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isDismissed])

    const handleDismiss = () => {
        setIsVisible(false)
        setIsDismissed(true)
        sessionStorage.setItem('stickyCtaDismissed', 'true')
    }

    if (isDismissed) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#008B8B] to-[#00a0a0] shadow-2xl"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            {/* Message */}
                            <div className="flex items-center space-x-3 text-center sm:text-left">
                                <span className="text-2xl">🎁</span>
                                <div>
                                    <p className="font-bold text-white text-lg">
                                        Free Gut Health Consultation Available - Limited Spots
                                    </p>
                                    <p className="text-white/90 text-sm hidden sm:block">
                                        Book your 15-minute consultation today
                                    </p>
                                </div>
                            </div>

                            {/* CTA and Dismiss */}
                            <div className="flex items-center space-x-3">
                                <Link
                                    href="/contact"
                                    className="bg-white text-[#008B8B] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
                                >
                                    Book Now
                                </Link>
                                <button
                                    onClick={handleDismiss}
                                    className="text-white/80 hover:text-white transition-colors p-2"
                                    aria-label="Close"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
