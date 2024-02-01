import React from "react";
import styled, { keyframes } from "styled-components";
import { FaLinkedin } from "react-icons/fa";

const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const BannerContainer = styled.div`
  overflow: hidden;
`;

const BannerMarquee = styled.div`
  display: flex;
  animation: ${marquee} 10s linear infinite;
`;

const BannerItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin: 100px 0;
`;

const LinkedInText = styled.a`
  color: #0077b5; /* LinkedIn blue color */
  text-decoration: none;
  text-transform: uppercase;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-right: 10px;
`;

const LinkedInIcon = styled(FaLinkedin)`
  font-size: 4.5rem; /* Added style */
  color: #0077b5; /* LinkedIn blue color */
  margin-left: 10px; /* Added margin to separate text and icon */
`;

const LinkedIn = () => {
  // Define the number of times you want to repeat the same item
  const repeatCount = 2;

  // Define the content of the item
  const itemContent = (
    <BannerItem>
      <LinkedInText
        href="https://www.linkedin.com/company/levelupesg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        OUR LINKEDIN
      </LinkedInText>
      <LinkedInIcon />
    </BannerItem>
  );

  return (
    <>
      <BannerContainer>
        <BannerMarquee>
          {[...Array(repeatCount)].map((_, index) => (
            <React.Fragment key={index}>{itemContent}</React.Fragment>
          ))}
        </BannerMarquee>
      </BannerContainer>
    </>
  );
};

export default LinkedIn;
