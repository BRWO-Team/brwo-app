import React from 'react';

import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import './ListingType.css';

class ListingTypes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className='listing-types'
        style={{ textAlign: 'center', marginBottom: 50 }}
      >
        <Typography
          variant='h3'
          style={{ fontFamily: 'Roboto, sans-serif', marginBottom: 50 }}
        >
          What can you find on BRWO?
        </Typography>

        <Container>
          <Row className='listingTypeRow'>
            <Col>
              <Image
                src='https://soldbyres.b-cdn.net/wp-content/uploads/2018/08/000-1068x534.jpg'
                fluid
              />
            </Col>
            <Col>
              <Card bg='primary' text='white' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>List and Borrow Items</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='listingTypeRow'>
            <Col>
              <Image
                src='https://www.trainingzone.co.uk/sites/default/files/styles/inline_banner/public/funstock.jpg?itok=gQ8J2CVl'
                fluid
              />
            </Col>
            <Col>
              <Card bg='success' text='white' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>
                    Share your skills or learn something new
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='listingTypeRow'>
            <Col>
              <Image
                src='https://miro.medium.com/max/1125/0*gkc2Yz8yPBqtnRAS'
                fluid
              />
            </Col>
            <Col>
              <Card bg='danger' text='white' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>
                    Make some money on the side and contribute to the shared
                    economy!
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ListingTypes;
