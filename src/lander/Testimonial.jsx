import styled from "styled-components";
import { Container } from "../UI/Container";
import TestimonialCard from "../UI/TestimonialCard";
import WorkVideo from "../UI/WorkVideo";

const StyledTestimonial = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h2`
  color: #0f3460;
  line-height: 53px;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 30px;
    line-height: 1.4;
  }
`;

const Subtitle = styled.p`
  color: #5a5a89;
  font-size: 1em;
  margin-bottom: 16px;
  line-height: 26px;
  text-align: center;
  padding: 0 20rem 0 20rem;

  @media (max-width: 768px) {
    font-size: 0.9em;
    margin-bottom: 1.5rem;
    padding: 0 1rem 0 1rem;
  }
`;

const VideoContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const testimonials = [
  {
    videoUrl:
      "https://jyotidigit.com/blog/wp-content/uploads/2024/11/AdsHindi1.mp4",
    imageUrl:
      "https://jyotidigit.com/blog/wp-content/uploads/2024/11/AdsHindi1-Pic.jpg",
    thumbnailUrl:
      "https://jyotidigit.com/blog/wp-content/uploads/2024/11/AdsHindi1-cover.jpg",
    name: "Md Parvej",
    position: "Influencer",
    // testimonial: "Lorem ipsum dolor sit amet consectetur.",
  },
  // Video 2
  {
    videoUrl: "https://jyotidigit.com/blog/wp-content/uploads/2024/11/Ads1.mp4",
    imageUrl:
      "https://jyotidigit.com/blog/wp-content/uploads/2024/11/Ads1-pic.jpg",
    thumbnailUrl:
      "https://jyotidigit.com/blog/wp-content/uploads/2024/11/Ads1-cover.jpg",
    name: "Manisha Rout",
    position: "Influencer",
    // testimonial: "Lorem ipsum dolor sit amet consectetur.",
  },

  // Video 3

  {
    videoUrl:
      "https://jyotidigit.com/blog/wp-content/uploads/2024/11/AdsHindi2.mp4",
    imageUrl:
      "https://jyotidigit.com/blog/wp-content/uploads/2024/11/AdsHindi2-pic.jpg",
    thumbnailUrl:
      "https://jyotidigit.com/blog/wp-content/uploads/2024/11/AdsHindi2-cover.jpg",
    name: "Chandrasekhar Tarai",
    position: "Video Creator",
    // testimonial: "Lorem ipsum dolor sit amet consectetur.",
  },
  // Video 4
  {
    videoUrl: "https://jyotidigit.com/blog/wp-content/uploads/2024/11/Ads2.mp4",
    imageUrl:
      "https://jyotidigit.com/blog/wp-content/uploads/2024/11/Ads2-pic.jpg",
    thumbnailUrl:
      "https://jyotidigit.com/blog/wp-content/uploads/2024/11/Ads2-cover.png",
    name: "Rani",
    position: "Video Creator",
    // testimonial: "Lorem ipsum dolor sit amet consectetur.",
  },
];

function Testimonial() {
  return (
    <Container>
      <StyledTestimonial>
        <Heading>What People Say About Us</Heading>
        <Subtitle>
          Unlock your brand's potential with tailored strategies and effective
          online campaigns. Let us help you reach your target audience, increase
          engagement, and drive growth without breaking the bank.
        </Subtitle>
      </StyledTestimonial>

      <VideoContainer style={{ display: "flex", gap: "20px" }}>
        {testimonials.map((testimonial, index) => (
          <WorkVideo key={index} {...testimonial} />
        ))}
      </VideoContainer>

      <TestimonialCard />
    </Container>
  );
}

export default Testimonial;
