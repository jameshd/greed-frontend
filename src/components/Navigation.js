import { Nav } from "react-bootstrap";

export const Navigation = () => (
  <Nav activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Navigation;
