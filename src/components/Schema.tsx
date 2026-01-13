import Script from 'next/script'

export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Microbiome Reset",
        "description": "RN-led virtual gut health programs. Personalized protocols, science-backed approach, 30-day guarantee.",
        "url": "https://www.microbiome-reset.com",
        "logo": "https://www.microbiome-reset.com/images/logo.png",
        "image": "https://www.microbiome-reset.com/images/social/og-image.png",
        "founder": {
            "@type": "Person",
            "name": "Dr. Q",
            "jobTitle": "Registered Nurse & Functional Medicine Practitioner"
        },
        "areaServed": {
            "@type": "Country",
            "name": "United States"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pittsburgh",
            "addressRegion": "PA",
            "addressCountry": "US"
        },
        "priceRange": "$$",
        "telephone": "+1-XXX-XXX-XXXX",
        "email": "info@microbiomereset.com",
        "sameAs": []
    }

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function ServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Gut Health Consultation",
        "name": "Microbiome Reset Program",
        "description": "Personalized virtual gut health programs with RN-led consultations",
        "provider": {
            "@type": "MedicalBusiness",
            "name": "Microbiome Reset"
        },
        "areaServed": {
            "@type": "Country",
            "name": "United States"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Gut Health Programs",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Personalized Microbiome Reset Program",
                        "description": "Science-backed gut health optimization"
                    }
                }
            ]
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
        }
    }

    return (
        <Script
            id="service-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}


export function FAQSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long until I see results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most clients notice improvements within 2-4 weeks of starting the program. Results vary based on individual health conditions and adherence to the protocol."
                }
            },
            {
                "@type": "Question",
                "name": "Is this program right for me?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our programs are designed for people experiencing digestive issues, low energy, autoimmune concerns, post-antibiotic recovery needs, or those seeking preventive health optimization."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need special testing first?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Testing is optional but not required to start. We can recommend appropriate testing based on your initial consultation."
                }
            },
            {
                "@type": "Question",
                "name": "What if I have dietary restrictions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All our protocols are fully customizable to accommodate dietary restrictions, allergies, and personal preferences."
                }
            },
            {
                "@type": "Question",
                "name": "Is this covered by insurance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Programs are private pay. HSA and FSA funds may be eligible for reimbursement. We can provide documentation for your insurance company."
                }
            },
            {
                "@type": "Question",
                "name": "What's included in the program?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Programs include personalized protocols, one-on-one virtual consultations with Dr. Q (RN), educational video library access, progress tracking tools, and ongoing email support."
                }
            },
            {
                "@type": "Question",
                "name": "What if it doesn't work for me?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer a 30-day money-back guarantee. If you're not satisfied with your progress, we'll refund your investment—no questions asked."
                }
            }
        ]
    }

    return (
        <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function AggregateRatingSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Microbiome Reset",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "6",
            "bestRating": "5",
            "worstRating": "1"
        }
    }

    return (
        <Script
            id="aggregate-rating-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
