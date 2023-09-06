import { styled } from "styled-components";
import { motion, Variants } from "framer-motion";
import IconBackground from "../../components/IconBackground";
import BackButton from "../../components/BackButton";

const Section = styled(motion.section)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Article = styled(motion.article)`
  position: relative;
  padding: 3rem;
  width: 800px;
  height: 500px;
  border-radius: 0px;
  box-shadow: 0px 24px 100px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  pointer-events: none;
`;

const Title = styled(motion.h1)`
  font-family: "Oswald";
  font-size: 48px;
  text-align: center;
`;
const Paragraph = styled(motion.p)`
  padding: 1rem 2rem;
  font-size: 32px;
  line-height: 1.5;
`;

function Who() {
  const variants: Variants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const titleVariants: Variants = {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  const paragraphVariants: Variants = {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      y: 10,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  return (
    <Section
      variants={variants}
      key="about"
      initial="initial"
      animate="animate"
      transition={{
        delay: 0.6,
        duration: 1,
        delayChildren: 2,
        staggerChildren: 1,
      }}
    >
      <IconBackground />
      <Article>
        <Title variants={titleVariants}>
          Hi. I'm CJ K,
          <br />
          <br />
          THE <mark>INTERACTIVE-FRONT-END ENGINEER</mark>
          <br />
        </Title>
        <Paragraph variants={paragraphVariants}>
          <br />
          Make <mark>things</mark> active.
          <br />
          Build <mark>things</mark> solid.
        </Paragraph>
        <Paragraph variants={paragraphVariants}>
          I'm focused and I'm ready for <br />
          Every<mark>things</mark> that should be done.
        </Paragraph>
      </Article>
      <BackButton />
    </Section>
  );
}

export default Who;
