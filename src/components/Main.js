import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
// import '../styles/main.css'

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Container>
          <Row>
            <Col lg>
              <Button className="button" size="lg" block variant="primary">
                Borrow Items
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg>
              <Button className="button" size="lg" variant="success" block>
                Borrow Time
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg>
              <Button className="button" size="lg" variant="danger" block>
                Request
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
