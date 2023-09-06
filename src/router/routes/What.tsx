import { styled } from "styled-components";
import { motion, Variants } from "framer-motion";
import BackButton from "../../components/BackButton";
import { useEffect } from "react";

const Section = styled(motion.section)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "SamsungSansBold";
  overflow-y: scroll;

  & mark {
    color: #00fca6;
    animation-name: glowing2;
  }
`;

const Project = styled.div`
  min-height: 100vh;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

const Imgs = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  margin: auto;
  width: 80%;
  object-fit: cover;
`;
const Article = styled(motion.article)`
  padding: 3rem 2rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
`;

const Title = styled(motion.h1)`
  margin-bottom: 2rem;
  font-family: "Oswald";
  font-size: 42px;
  text-align: center;
`;
const Paragraph = styled(motion.p)`
  font-family: "SamsungSansBold";
  padding: 1rem 3rem;
  font-size: 22px;
  line-height: 1.5;
`;

function What() {
  const variants: Variants = {
    initial: {
      opacity: 0,
      x: 10,
    },
    animate: {
      opacity: 1,
      x: 0,
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

  function randonText() {
    const text = "abcdefghijklmnopqrstuvwxyz0123456789",
      letter = text[Math.floor(Math.random() * text.length)];
    return letter;
  }

  function rain() {
    const text = document.createElement("div");
    const left = Math.floor(Math.random() * document.body.clientWidth);
    const size = Math.random() * 1.2;
    text.classList.add("rain");
    text.innerText = randonText();
    text.style.left = left + "px";
    text.style.fontSize = size + 0.5 + "em";
    document.body.appendChild(text);
    setTimeout(() => {
      text.remove();
    }, 10000);
  }

  useEffect(() => {
    const rainInterval = setInterval(rain, 160);
    return () => {
      clearTimeout(rainInterval);
    };
  }, []);

  return (
    <Section
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        delay: 0.6,
        duration: 1,
        delayChildren: 2,
        staggerChildren: 1,
      }}
    >
      <Project>
        <Imgs>
          <Img src="/assets/img/MDE4.jpg" />
          <Img src="/assets/img/MDE3.jpg" />
        </Imgs>
        <Article>
          <Title variants={titleVariants}>
            SAMSUNG Global Retail
            <br /> <mark>Multi Device Player</mark>
          </Title>
          <Paragraph variants={paragraphVariants}>
            Multi-device simultaneous playback appication
            <br />
            using <mark>BLE communication</mark>.
            <br />
            <br />
            Introduces compatibility features between SAMSUNG devices. It's a
            kind of player for case demonstration and Introduction of feature.
            <br />
            <br />
            It was distributed globaly in 43 languages.
            <br />
            <br />
            <br />
            <mark>#Features</mark>
            <ul>
              <li>
                1. one UI <mark>React</mark> app for mutli-platform-support
              </li>
              <li>2. Facade pattern for managing native plaform APIs</li>
              <li>
                3. 43 Languages Mapping by Using{" "}
                <mark>BCP 47 Language Codes</mark>
              </li>
              <li>4. Swappable BLE Role : "Central" between "Peripheral"</li>
            </ul>
          </Paragraph>
        </Article>
      </Project>
      <Project>
        <Article>
          <Title variants={titleVariants}>
            SAMSUNG FLIP5 UNPACK
            <br /> <mark>CUSTOM Experience</mark>
          </Title>
          <Paragraph variants={paragraphVariants}>
            This is a pre-Experience of the custom Flip5 cover display.
            <br /> developed by <mark>Flutter</mark> as Windows App
            <br />
            <br />
            You can manipulate the photo you have taken with Flip5 and you can
            add decorative items scaned through QR codes or barcodes on the
            touch screen kiosk. just like shopping.
            <br />
            <br />
            The result image can be downloaded by QR end of contents
            <br />
            <br />
            <mark>#Features</mark>
            <ul>
              <li>
                1. 43-inch <mark>Electrostatic-Touch-Screen</mark>
              </li>
              <li>2. Authentication on each country server</li>
              <li>
                3. <mark>Multilingual support</mark> by file-system
              </li>
              <li>4. HUE-light system with Wi-Fi</li>
              <li>5. Adjustable UI screen position</li>
            </ul>
          </Paragraph>
        </Article>
        <Img src="/assets/img/ILP.jpg" />
      </Project>
      <BackButton />
    </Section>
  );
}

export default What;
