import { Container } from "react-bootstrap";
import stlyes from "./styles.module.css";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@component/common";

const { container, wrapper } = stlyes;

export default function MainLayout() {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
}
