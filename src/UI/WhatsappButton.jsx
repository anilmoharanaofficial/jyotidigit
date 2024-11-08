import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const StyledWhatsappButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    background-color: #128c7e;
  }
`;

function WhatsappButton() {
  return (
    <StyledWhatsappButton
      href="https://wa.me/9853884530?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </StyledWhatsappButton>
  );
}

export default WhatsappButton;
