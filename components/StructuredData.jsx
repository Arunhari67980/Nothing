"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arun",
    url: "https://arun-portfolio.com",
    jobTitle: "Full Stack Developer",
    email: "mailto:arun@example.com",
    sameAs: [
      "https://twitter.com/arun",
      "https://github.com/arun",
      "https://linkedin.com/in/arun",
    ],
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "Tamil Nadu",
      },
    },
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Responsive Design",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
