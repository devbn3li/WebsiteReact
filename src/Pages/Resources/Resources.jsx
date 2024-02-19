import React from "react";
import DynamicLandingHero from "../../Components/DynamicLandingHero";
import PopularResources from "../../Components/Resources/PopularResources";
import BlogView from "../../Components/Resources/BlogView";

function Resources() {
  return (
    <div>
      <DynamicLandingHero
        title="Resources"
        subtitle="At LevelUp, we&apos;re a passionate team of sustainability experts and scientists with a mission to make corporate sustainability and  ESG practices achievable for businesses of all sizes. We achieve this by offering innovative and affordable ESG solutions alongside expert advice."
        button1={{ path: "/contact", label: "Contact Us" }}
        button2={{ path: "/contact", label: "Make an Impact, Together" }}
      />
      <BlogView/>
      <PopularResources/>
      
    </div>
  );
}

export default Resources;
