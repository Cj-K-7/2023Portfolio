import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const Stage = styled(motion.section)`
  position: relative;
  top: -50px;
  margin: auto;
  max-width: 1200px;
  width: 80vw;
  min-width: 800px;
  height: 460px;
  display: flex;
  justify-content: center;
  gap: 8vw;
  -webkit-box-reflect: below 12px linear-gradient(transparent, #0003);

  & article {
    filter: blur(8px);
    -webkit-mask: var(--mask);
    mask: var(--mask);
    &:nth-child(2) {
      animation-name: glowingBox2;
    }
    &:nth-child(3) {
      animation-name: glowingBox3;
    }
  }

  &:hover article {
    filter: blur(8px);
  }

  & article:hover {
    filter: blur(0px);
  }
`;

const Project = styled(motion.article)`
  position: relative;
  max-width: 260px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 512ms ease-in-out;
  animation: 1.6s ease-in-out infinite glowingBox;
  cursor: pointer;
`;

const BackgroundImg = styled(motion.div)<{ $src: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
`;

const Letter = styled(motion.h1)`
  position: relative;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.9em;
  text-align: center;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6), 4px 4px 6px rgba(0, 0, 0, 0.6),
    -2px -2px 6px rgba(0, 0, 0, 0.6);
`;

const Email = styled.a`
  font-family: "FiraCode";
  color: inherit;
  position: fixed;
  bottom: 2rem;
  right: 3rem;
`;

function Home() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [selected, setSelected] = useState<Subject>();
  const navigate = useNavigate();
  const subjects: Subject[] = ["ABOUT", "WORKS", "TBD"];

  const onClick: React.MouseEventHandler<HTMLElement> = (event) => {
    const {
      currentTarget: { id },
    } = event;
    if (id === "TBD") return;
    setSelected(id as Subject);
    if (isNavigating) return;
    setIsNavigating(true);
    setTimeout(() => navigate(id), 1000);
  };

  const variant: Variants = {
    hidden: {},
    visible: {},
    selected: {},
  };
  const imageVariant: Variants = {
    hidden: {
      opacity: 0,
      filter: "grayscale(1)",
    },
    visible: {
      opacity: 0.4,
      filter: "grayscale(0)",
    },
    selected: {
      opacity: 1,
      filter: "grayscale(0)",
    },
  };
  return (
    <Stage>
      {subjects.map((subject, subjectIndex) => (
        <Project
          key={subject + subjectIndex}
          id={subject}
          variants={variant}
          // initial="hidden"
          animate={selected === subject ? "selected" : "hidden"}
          whileHover={selected === subject ? undefined : "visible"}
          onClick={onClick}
        >
          <BackgroundImg
            variants={imageVariant}
            $src={`/assets/img/${subject}.jpg`}
          />
          {subject.split("").map((letter, letterIndex) => {
            const y = Math.sin((Math.PI / 2) * Math.random() * 5) * 60;
            const childVariants: Variants = {
              hidden: {
                translateY: `${y}px`,
              },
              visible: {
                translateY: `0px`,
              },
              selected: {
                opacity: 0,
              },
            };
            return (
              <Letter
                key={`${subject}_${letter}_${letterIndex}`}
                variants={childVariants}
              >
                {letter}
              </Letter>
            );
          })}
        </Project>
      ))}
      <Email href="mailto:kllt7059@gmail.com">kllt7059@gmail.com</Email>
    </Stage>
  );
}

export default Home;
