'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface Stat {
    value: number
    label: string
    icon: string
    suffix?: string
}

export default function SocialProofCounters() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const stats: Stat[] = [
        { value: 500, label: 'Clients Served', icon: '👥', suffix: '+' },
        { value: 95, label: 'Success Rate', icon: '⚡', suffix: '%' },
        { value: 40, label: 'U.S. States', icon: '🗺️', suffix: '+' },
        { value: 10000, label: 'Hours of Consultations', icon: '⏱️', suffix: '+' }
    ]

    return (
        <section ref={ref} className="py-20 bg-navy-800/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Trusted by <span className="text-gradient">Thousands</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Real results from real people across America
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-effect-strong p-6 rounded-2xl text-center stat-card"
                        >
                            <div className="text-5xl mb-3">{stat.icon}</div>
                            <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                                {isInView && (
                                    <Counter
                                        from={0}
                                        to={stat.value}
                                        duration={2}
                                        suffix={stat.suffix}
                                    />
                                )}
                            </div>
                            <p className="text-gray-400 font-semibold">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Counter({ from, to, duration, suffix = '' }: { from: number; to: number; duration: number; suffix?: string }) {
    const [count, setCount] = useState(from)

    useEffect(() => {
        let startTime: number | null = null
        let animationFrame: number

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(from + (to - from) * easeOutQuart)

            setCount(currentCount)

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            } else {
                setCount(to)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [from, to, duration])

    return <>{count.toLocaleString()}{suffix}</>
}
