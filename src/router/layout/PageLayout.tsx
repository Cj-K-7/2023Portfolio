import { AnimatePresence } from "framer-motion";
import { styled } from "styled-components";

const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

type PageLayoutProps = {
  children: React.ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </Container>
  );
}

export default PageLayout;
