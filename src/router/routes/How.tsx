import { styled } from "styled-components";
import { motion, Variants } from "framer-motion";
import { ReactComponent as GIT } from "../../assets/svg/github.svg";
import BackButton from "../../components/BackButton";

const Section = styled(motion.section)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & mark {
    color: #ea3cea;
    animation-name: glowing3;
  }
`;

const Article = styled(motion.article)`
  position: relative;
  padding: 3rem;
  width: 600px;
  height: 500px;
  border-radius: 0px;
  box-shadow: 0px 24px 100px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
`;

const Title = styled(motion.h1)`
  font-family: "Oswald";
  font-size: 48px;
  text-align: center;
`;
const Paragraph = styled(motion.p)`
  display: flex;
  padding: 1rem 2rem;
  font-size: 32px;
  line-height: 1.5;
`;

function How() {
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
      <Article>
        <Title variants={titleVariants}>Contact Me</Title>
        <Paragraph variants={paragraphVariants}>
          <GIT
            width="50"
            onClick={() => {
              const a = document.createElement("a");
              a.href = "mailto:kllt7059@gmail.com";
              a.click();
              a.remove();
            }}
          />
        </Paragraph>
        <Paragraph variants={paragraphVariants}></Paragraph>
      </Article>
      <BackButton />
    </Section>
  );
}

export default How;
