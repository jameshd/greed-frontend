import { library } from "@fortawesome/fontawesome-svg-core";
import { faDice, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Table, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Game from "./components/Game";

library.add(faDice, faPlay);
const styles = {
  header: {
    padding: "1em",
    margin: "1em 0",
    background: "rgb(206,220,231)" /* Old browsers */,
    background:
      "-moz-linear-gradient(-45deg,  rgba(206,220,231,1) 0%, rgba(89,106,114,1) 100%)" /* FF3.6-15 */,
    background:
      "-webkit-linear-gradient(-45deg,  rgba(206,220,231,1) 0%,rgba(89,106,114,1) 100%)" /* Chrome10-25,Safari5.1-6 */,
    background:
      "linear-gradient(135deg,  rgba(206,220,231,1) 0%,rgba(89,106,114,1) 100%)" /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */,
    filter:
      "progid:DXImageTransform.Microsoft.gradient( startColorstr='#cedce7', endColorstr='#596a72',GradientType=1 )",
  },
};
function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12}>
          <header style={styles.header}>
            <h1>
              <FontAwesomeIcon icon={faDice} className="mr-3" /> Welcome to
              Greed!
            </h1>
          </header>
          <p className="mt-3">
            Greed is a dice game where you roll five dice to score points based
            on the rules below.{" "}
          </p>
          <Row>
            <Col xs={12} sm={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  A greed roll is scored as follows:
                </ListGroup.Item>
                <ListGroup.Item>
                  A set of three ones is 1000 points
                </ListGroup.Item>
                <ListGroup.Item>
                  A set of three numbers (other than ones) is worth 100x the
                  number. (e.g. three fives is 500 points).
                </ListGroup.Item>
                <ListGroup.Item>
                  A one (that is not part of a set of three) is worth 100
                  points.
                </ListGroup.Item>
                <ListGroup.Item>
                  A five (that is not part of a set of three) is worth 50
                  points.
                </ListGroup.Item>
                <ListGroup.Item>
                  Everything else is worth 0 points.
                </ListGroup.Item>
              </ListGroup>

              <Game />
            </Col>
            <Col xs={12} sm={6}>
              <Table striped bordered>
                <thead>
                  <tr className="">
                    <th>Roll</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1, 1, 1, 3, 2 </td>
                    <td>1000 points</td>
                  </tr>
                  <tr>
                    <td>3, 4, 2, 3, 3 </td>
                    <td> 300 points</td>
                  </tr>
                  <tr>
                    <td>1, 3, 4, 4, 6 </td>
                    <td> 100 points</td>
                  </tr>
                  <tr>
                    <td>2, 3, 4, 5, 6 </td>
                    <td> 50 points</td>
                  </tr>
                  <tr>
                    <td>2, 3, 4, 6, 2 </td>
                    <td> 0 points</td>
                  </tr>

                  <tr>
                    <td>1, 5, 2, 2, 3 </td>
                    <td> 150 points</td>
                  </tr>
                  <tr>
                    <td>1, 1, 1, 5, 1 </td>
                    <td> 1150 points</td>
                  </tr>
                  <tr>
                    <td>3, 4, 5, 3, 3 </td>
                    <td> 350 points</td>
                  </tr>
                  <tr>
                    <td>1, 5, 1, 2, 4 </td>
                    <td> 250 points</td>
                  </tr>
                  <tr>
                    <td>4, 4, 4, 2, 1 </td>
                    <td> 500 points</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
