import { windowVariant } from "./project.motion";
import { GlassWindow, Article, Image, Title, Paragraph } from "./project.style";

function ReactProject() {
  return (
    <GlassWindow
      variants={windowVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Article>
        <Image src="/assets/img/react/react_hardware.png" />
        <Title>BLE를 활용한 동시 송출 플레이어 앱</Title>
        <Paragraph></Paragraph>
      </Article>
      <Article>
        <Image src="/assets/img/react/react_software.png" />
        <Title>React 와 Native Integration</Title>
        <Paragraph></Paragraph>
      </Article>
    </GlassWindow>
  );
}

export default ReactProject;
