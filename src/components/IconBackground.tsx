import { ReactComponent as HTML } from "../assets/svg/html.svg";
import { ReactComponent as CSS } from "../assets/svg/css.svg";
import { ReactComponent as JAVASCRIPT } from "../assets/svg/javascript.svg";
import { ReactComponent as TYPESCRIPT } from "../assets/svg/typescript.svg";
import { ReactComponent as REACT } from "../assets/svg/react.svg";
import { ReactComponent as CODE } from "../assets/svg/code.svg";
import { ReactComponent as FLUTTER } from "../assets/svg/flutter.svg";
import { styled } from "styled-components";

const Background = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  & svg {
    padding: 0px 20px;
    align-self: center;
    fill: #161616;
    transition: 1s;
    &:nth-child(odd) {
      translate: 0px -16px;
    }
    &:nth-child(even) {
      translate: 0px 16px;
    }
  }
  & svg:hover {
    fill: #00dce6;
    filter: drop-shadow(0px 0px 30px #00dce6);
    -webkit-filter: drop-shadow(0px 0px 30px #00dce6);
    transition: 0s;
  }
`;

function IconBackground() {
  return (
    <Background>
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
      <HTML width="80px" />
      <JAVASCRIPT width="80px" />
      <CSS width="80px" />
      <TYPESCRIPT width="80px" />
      <CODE width="80px" />
      <REACT width="80px" />
      <FLUTTER width="80px" />
    </Background>
  );
}

export default IconBackground;
