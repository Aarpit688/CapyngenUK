import React from 'react'
import PartnershipHero from '../components/PartnershipHero'
import StatsSection from '../components/StatsSection'
import FeatureSection from '../components/FeatureSection'

const Partnership = () => {

    return (
        <div>
            <PartnershipHero />
            <div className='mt-20'></div>
            <StatsSection />
            <FeatureSection
                title="Agent Model"
                description="Become a trusted introducer and earn competitive commissions by referring clients to our platform. Whether you're an individual or a business, you can build a recurring revenue stream by connecting us with prospective clients."
                features={[
                    "Transparent commission structure",
                    "Comprehensive set of products and business models",
                    "Partner with No 1 Financial ecosystem and build your fortune with us"
                ]}
                imageSrc="https://b2broker.com/_next/image/?url=https%3A%2F%2Fmedia2.b2broker.com%2Fa-media%2FDefault-ard_Image-400x460Agentmodel.png&w=1920&q=90"
                imageAlt="Panel Discussion"
                reverseLayout={false}
            />
            <FeatureSection
                title="Integration and professional service"
                description="Are you a systems integrator or consultancy working with clients in finance or tech? We offer an opportunity to integrate and deploy our solutions within your client infrastructure."
                features={[
                    "Extend your service offering with powerful financial products",
                    "Receive training and technical support",
                    "Become part of our ecosystem and monetize implementation and consulting"
                ]}
                imageSrc="https://b2broker.com/_next/image/?url=https%3A%2F%2Fmedia2.b2broker.com%2Fa-media%2FDefault-ard_Image-400x460Agentmodel1.png&w=1920&q=90"
                imageAlt="Trading Setup"
                reverseLayout={true} // Puts the image on the right
            />
            <FeatureSection
                title="Venture Capital investments"
                description="We selectively invest in businesses that align with our ecosystem and values. If your company complements our offerings and we see mutual potential — let’s talk."
                features={[
                    "Smart capital with access to legal, financial, and go-to-market expertise",
                    "Collaboration, not control — we co-develop, co-market, and grow together",
                    "Access to our network, clients, and global infrastructure"
                ]}
                imageSrc="https://b2broker.com/_next/image/?url=https%3A%2F%2Fmedia2.b2broker.com%2Fa-media%2FDefault-ard_Image-400x460Agentmodel2.png&w=1920&q=90"
                imageAlt="Panel Discussion"
                reverseLayout={false}
            />
            <FeatureSection
                title="Product Collaboration"
                description="We welcome collaborations with companies offering complementary products or services.If you're building something meaningful — let’s explore how our products can integrate."
                features={[
                    "Win–win product alliances",
                    "Shared exposure and user bases",
                    "Leverage our brand, licenses, and tech stack"
                ]}
                imageSrc="https://b2broker.com/_next/image/?url=https%3A%2F%2Fmedia2.b2broker.com%2Fa-media%2FDefault-ard_Image-400x460Agentmodel3.png&w=1920&q=90"
                imageAlt="Trading Setup"
                reverseLayout={true} // Puts the image on the right
            />
        </div>
    )
}

export default Partnership