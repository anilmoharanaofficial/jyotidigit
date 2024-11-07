import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 3rem 0;
  gap: 4.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  border-radius: 25px;
  padding: 4rem 3rem 4rem 3rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  text-align: center;
  width: 400px;
  height: auto;

  &:hover {
    background-color: #f7fafd;
  }
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  color: #3a5da5;
  margin-bottom: 1rem;
`;

const Highlight = styled.div`
  font-size: 12px;
  line-height: 25px;
  background-color: #ffe8da;
  padding: 0.3rem 0.8rem;
  border-radius: 8px;
  color: #0f3460;
  font-weight: 400;
  margin: 0 auto 1rem;
  display: inline-block;
`;

const Title = styled.h3`
  margin-top: 1.8rem;
  font-size: 22px;
  line-height: 33px;
  color: #24417c;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #5a5a89;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 1.5rem;
`;

const LearnMore = styled.a`
  margin-top: 1.5rem;
  color: #0f3460;
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ServiceCards = () => {
  return (
    <CardContainer>
      <ServiceCard>
        <IconWrapper>
          <TiSocialAtCircular />
        </IconWrapper>
        <Highlight>Boost Your Reach</Highlight>
        <Title>Influencer Marketing</Title>
        <Description>
          Leverage popular influencers to promote your brand, creating authentic
          connections with audiences.
        </Description>
        <LearnMore href="#">LEARN MORE &rarr;</LearnMore>
      </ServiceCard>

      <ServiceCard>
        <IconWrapper>
          <CiSearch />
        </IconWrapper>
        <Highlight>Expand Visibility</Highlight>
        <Title>Social Media Ads</Title>
        <Description>
          Drive targeted traffic with strategic ad placements on Instagram,
          Facebook, and other social platforms.
        </Description>
        <LearnMore href="#">LEARN MORE &rarr;</LearnMore>
      </ServiceCard>

      <ServiceCard>
        <IconWrapper>
          <IoMailUnreadOutline />
        </IconWrapper>
        <Highlight>Personalized Outreach</Highlight>
        <Title>Brand Placement</Title>
        <Description>
          Showcase your brand in relevant online spaces to boost awareness and
          drive meaningful engagement.
        </Description>
        <LearnMore href="#">LEARN MORE &rarr;</LearnMore>
      </ServiceCard>
    </CardContainer>
  );
};

export default ServiceCards;
