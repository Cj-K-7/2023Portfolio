import { styled } from "styled-components";
import { motion } from "framer-motion";

export const GlassWindow = styled(motion.section)`
  margin: auto;
  padding: 2rem 3rem;
  width: 800px;
  height: 600px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1.5px solid rgba(255, 255, 255, 0.5);
  border-left: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 36px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.8);
  background-color: #ffffff25;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const IconBox = styled(motion.div)``;

export const Article = styled(motion.article)`
  padding: 2rem 0;
  min-height: 600px;
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 300px 300px;

  &:nth-child(odd) {
    grid-template:
      "a b"
      "a c";
  }
  &:nth-child(even) {
    grid-template:
      "b a"
      "c a";
  }
`;

export const Image = styled(motion.img)`
  grid-area: a;
  align-self: center;
`;

export const Title = styled(motion.h1)`
  grid-area: b;
`;

export const Paragraph = styled(motion.p)`
  grid-area: c;
`;
