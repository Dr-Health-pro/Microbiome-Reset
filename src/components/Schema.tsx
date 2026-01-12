import Script from 'next/script'

export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Microbiome Reset",
        "description": "Virtual gut health optimization programs led by registered nurses and functional medicine practitioners",
        "url": "https://www.microbiome-reset.com",
        "logo": "https://www.microbiome-reset.com/images/social/og-image.png",
        "founder": {
            "@type": "Person",
            "name": "Dr. Q",
            "jobTitle": "Registered Nurse & Functional Medicine Practitioner"
        },
        "areaServed": {
            "@type": "Country",
            "name": "United States"
        },
        "serviceType": "Virtual Health Consultations",
        "priceRange": "$$",
        "telephone": "+1-XXX-XXX-XXXX",
        "email": "info@microbiome-reset.com"
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
        "serviceType": "Gut Health Consultation & Microbiome Optimization",
        "provider": {
            "@type": "MedicalBusiness",
            "name": "Microbiome Reset"
        },
        "areaServed": {
            "@type": "Country",
            "name": "United States"
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "priceRange": "$297-997"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Gut Health Programs",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Basic Program - 4 Weeks"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Advanced Program - 8 Weeks"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Premium Program - 12 Weeks"
                    }
                }
            ]
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
                    "text": "Most clients notice improvements within 2-4 weeks of starting the program. Initial changes like reduced bloating and improved energy often appear first, with more significant transformations occurring over 8-12 weeks as your microbiome rebalances."
                }
            },
            {
                "@type": "Question",
                "name": "Is this program right for me?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our programs are designed for anyone experiencing gut health concerns including IBS, bloating, food sensitivities, autoimmune conditions, skin issues, or those simply wanting to optimize their health. During your free consultation, we'll assess if our approach aligns with your specific needs."
                }
            },
            {
                "@type": "Question",
                "name": "What if I have dietary restrictions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All our protocols are fully customizable to accommodate dietary restrictions, allergies, and personal preferences. Whether you're vegan, gluten-free, have multiple food sensitivities, or follow other dietary patterns, we'll create a plan that works for you."
                }
            },
            {
                "@type": "Question",
                "name": "Is this covered by insurance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our programs are private pay and not directly billed to insurance. However, many clients successfully use HSA (Health Savings Account) or FSA (Flexible Spending Account) funds for our services. We provide detailed receipts for your records."
                }
            },
            {
                "@type": "Question",
                "name": "What if it doesn't work for me?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer a 30-day money-back guarantee. If you're not satisfied with your progress after following the program, we'll refund your investment—no questions asked. We're committed to your success and stand behind our science-backed protocols 100%."
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
