import React from 'react'
import WorkShopCards from './WorkShopCards'

const workshopCardData = {
  card1: {
    title: "Corporate Sustainability & ESG Fundamentals",
    description: "Understanding the Fundamentals of Environmental, Social, and Governance Factors",
    topics: ["Introduction to ESG", "Why ESG Matters", "ESG Integration", "The Business Case for ESG"],
    image: "/assets/images/set-modern-cards-with-esg-concept-postcards-about-environmental-social-governance-environmental-sustainability-vector-illustration-flat-style_531399-1292.avif",
  },
  card2: {
    title: "Corporate Sustainability & ESG Governance",
    description: "The Role of Boards in Ensuring Effective ESG Governance",
    topics: ["Board Oversight of ESG", "Stakeholder Engagement", "Building a Sustainable Governance Framework", "Internal Audit for ESG"],
    image: "/assets/images/set-modern-cards-with-esg-concept-postcards-about-environmental-social-governance-environmental-sustainability-vector-illustration-flat-style_531399-1292.avif",
  },
  card3: {
    title: "Corporate Sustainability & ESG Reporting",
    description: "A Comprehensive Guide to GRI, SASB, TCFD, and CDP",
    topics: ["ESG Reporting Frameworks", "Measuring ESG Performance", "Best Practices in ESG Disclosure"],
    image: "/assets/images/set-modern-cards-with-esg-concept-postcards-about-environmental-social-governance-environmental-sustainability-vector-illustration-flat-style_531399-1292.avif",
  },
  card4: {
    title: "Corporate Sustainability & ESG Regulations",
    description: "Overview of ESG Regulations Across Regions",
    topics: ["Global ESG Regulatory Landscape", "Legal Implications of ESG Non-Compliance", "Future Trends in ESG Regulations"],
    image: "/assets/images/set-modern-cards-with-esg-concept-postcards-about-environmental-social-governance-environmental-sustainability-vector-illustration-flat-style_531399-1292.avif",
  },
  card5: {
    title: "Corporate Sustainability & ESG Assurance",
    description: "Understanding the Essentials of ESG Governance for Sustainable Business Practices.",
    topics: ["ESG Governance Overview", "Internal Audits for ESG", "External Audits and ESG Reporting", "Assurance Standards for ESG", "Selecting Assurance Providers", "Continuous Improvement in ESG Assurance", "Resources for ESG Governance Basics"],
    image: "/assets/images/set-modern-cards-with-esg-concept-postcards-about-environmental-social-governance-environmental-sustainability-vector-illustration-flat-style_531399-1292.avif",
  },
  card6: {
    title: "Corporate Social Responsibility & Social Responsibility",
    description: "The Intersection of ESG and CSR Initiatives",
    topics: ["Corporate Social Responsibility (CSR)", "Diversity, Equity, and Inclusion (DEI)", "Community Engagement"],
    image: "/assets/images/set-modern-cards-with-esg-concept-postcards-about-environmental-social-governance-environmental-sustainability-vector-illustration-flat-style_531399-1292.avif",
  },
  card7: {
    title: "ESG Technology and Innovation",
    description: "Leveraging Tech Solutions for Accurate and Efficient Reporting",
    topics: ["Technology in ESG Reporting", "Innovations in Sustainable Practices", "Blockchain and ESG"],
    image: "/assets/images/set-modern-cards-with-esg-concept-postcards-about-environmental-social-governance-environmental-sustainability-vector-illustration-flat-style_531399-1292.avif",
  },
  card8: {
    title: "Industry-Specific ESG Considerations",
    description: "Navigating ESG Challenges and Opportunities in Energy",
    topics: ["ESG in the Energy Sector", "ESG in Finance", "ESG in Healthcare"],
    image: "/assets/images/set-modern-cards-with-esg-concept-postcards-about-environmental-social-governance-environmental-sustainability-vector-illustration-flat-style_531399-1292.avif",
  },
};



function WorkShop() {
  return (
    <div>
      {Object.keys(workshopCardData).map((key) => (
        <WorkShopCards
          key={key}
          title={workshopCardData[key].title}
          description={workshopCardData[key].description}
          topics={workshopCardData[key].topics}
          image={workshopCardData[key].image}
        />
      ))}
    </div>
  );
}

export default WorkShop