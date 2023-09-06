import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Button = styled.button`
  position: fixed;
  left: 4rem;
  bottom: 3rem;
  font-size: 24px;
  font-family: "FiraCode";
  border: none;
  color: inherit;
  background-color: transparent;
  z-index: 1;
  cursor: pointer;

  animation: 1.6s linear 5s infinite glowing_icon;
  @keyframes glowing_icon {
    0%,
    100% {
      text-shadow: 0px 0px 0px #00dce600;
    }

    50% {
      text-shadow: 0px 0px 15px #00dce6;
    }
  }
`;

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/")}>
      <mark>return</mark> back()<mark>;</mark>
    </Button>
  );
}

export default BackButton;
