'use client'

import Link from 'next/link'

interface BreadcrumbProps {
    currentPage: string
}

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
    return (
        <nav className="py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <ol className="flex items-center space-x-2 text-sm">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-400 hover:text-accent-400 transition-colors"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                    <li className="text-gray-300 font-medium">
                        {currentPage}
                    </li>
                </ol>
            </div>
        </nav>
    )
}
