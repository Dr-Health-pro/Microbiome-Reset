'use client'

import Link from 'next/link'
import { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface CTAButtonProps {
    text: string
    href?: string
    onClick?: () => void | Promise<void>
    variant?: 'primary' | 'secondary'
    className?: string
}

export default function CTAButton({
    text,
    href,
    onClick,
    variant = 'primary',
    className = ''
}: CTAButtonProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

    const baseClasses = "relative overflow-hidden inline-flex items-center justify-center min-h-[50px] md:min-h-[60px] px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 transform active:scale-95"

    const variantClasses = {
        primary: "bg-[#008B8B] hover:bg-[#006666] text-white hover:scale-105",
        secondary: "glass-effect hover:bg-white/20"
    }

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        // Create ripple effect
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const newRipple = { x, y, id: Date.now() }
        setRipples(prev => [...prev, newRipple])

        // Remove ripple after animation
        setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== newRipple.id))
        }, 600)

        // Handle async onClick
        if (onClick) {
            setIsLoading(true)
            try {
                await onClick()
                setIsSuccess(true)
                setTimeout(() => {
                    setIsSuccess(false)
                    setIsLoading(false)
                }, 2000)
            } catch (error) {
                setIsLoading(false)
            }
        }
    }

    const content = (
        <>
            {/* Ripple effects */}
            {ripples.map(ripple => (
                <span
                    key={ripple.id}
                    className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: '20px',
                        height: '20px',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            ))}

            {/* Button content */}
            {isLoading ? (
                <LoadingSpinner size="sm" />
            ) : isSuccess ? (
                <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Success!</span>
                </span>
            ) : (
                text
            )}
        </>
    )

    if (href && !onClick) {
        return (
            <Link
                href={href}
                className={`${baseClasses} ${variantClasses[variant]} ${className}`}
                onClick={handleClick}
            >
                {content}
            </Link>
        )
    }

    return (
        <button
            onClick={handleClick}
            disabled={isLoading || isSuccess}
            className={`${baseClasses} ${variantClasses[variant]} ${className} ${(isLoading || isSuccess) ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
            {content}
        </button>
    )
}
