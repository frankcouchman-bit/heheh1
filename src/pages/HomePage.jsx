import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';

export default function HomePage() {
  // JSON-LD FAQ structured data
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SEOScribe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEOScribe is an AI-driven writing assistant that generates SEO-optimized content quickly."
        }
      },
      {
        "@type": "Question",
        "name": "How do I sign up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Click Get Started and create an account using Google or your email. It's free to try!"
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to upgrade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic usage is free. Upgrading unlocks unlimited access to premium tools."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SEOScribe – AI Content Writing</title>
        <meta name="description" content="SEOScribe helps you write SEO-optimized content effortlessly. Try our AI writing tools." />
        <link rel="canonical" href="https://seoscribe.com/" />
        {/* Inject JSON-LD FAQ schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqJson)}
        </script>
      </Helmet>
      <HeroSection />
      <FeatureGrid />
      <HowItWorks />
      <Testimonials />
      <FAQAccordion />
      <CTABlock />
    </>
  );
}
