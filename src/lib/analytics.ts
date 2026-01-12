// Google Analytics event tracking utilities

// Initialize Google Analytics
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

declare global {
    interface Window {
        gtag?: (...args: any[]) => void
    }
}

// Track page views
export const pageview = (url: string) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        })
    }
}

// Track custom events
export const event = ({ action, category, label, value }: {
    action: string
    category: string
    label?: string
    value?: number
}) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

// Specific event trackers for common actions
export const trackCTAClick = (ctaName: string, location: string) => {
    event({
        action: 'cta_click',
        category: 'engagement',
        label: `${ctaName} - ${location}`,
    })
}

export const trackFormSubmission = (formName: string) => {
    event({
        action: 'form_submission',
        category: 'conversion',
        label: formName,
    })
}

export const trackPackageSelection = (packageName: string) => {
    event({
        action: 'package_selection',
        category: 'conversion',
        label: packageName,
    })
}

export const trackVideoPlay = (videoTitle: string) => {
    event({
        action: 'video_play',
        category: 'engagement',
        label: videoTitle,
    })
}

export const trackNavigationClick = (linkName: string) => {
    event({
        action: 'navigation_click',
        category: 'engagement',
        label: linkName,
    })
}
