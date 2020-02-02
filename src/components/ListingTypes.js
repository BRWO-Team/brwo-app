import React from 'react';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import './ListingType.css';

import MediaCard from './MediaCard';

class ListingTypes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardStyles = {
      card: {
        maxWidth: 400
      },
      media: {
        height: 140
      }
    };

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

        {/* <MediaCard
          styles={{ margin: 'auto' }}
          width='75%'
          image='https://soldbyres.b-cdn.net/wp-content/uploads/2018/08/000-1068x534.jpg'
          title='List and Borrow Items'
          description="Some quick example text to build on the card title and make
        up the bulk of the card's content."
        /> */}

        <Grid container justify='center' className='listingTypeRow'>
          <Card style={cardStyles.card}>
            <CardActionArea>
              <CardMedia
                style={cardStyles.media}
                image={
                  'https://soldbyres.b-cdn.net/wp-content/uploads/2018/08/000-1068x534.jpg'
                }
                title={'List and Borrow Items'}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {'List and Borrow Items'}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {`Want something but you know you'll only use it once? Borrow items and get the stuff you want without the upfront cost of buying it!`}
                  <br></br>
                  <br></br>
                  {`Have something that you barely use anymore? List it and put your unused items to work earning money for you!`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid container justify='center' className='listingTypeRow'>
          <Card style={cardStyles.card}>
            <CardActionArea>
              <CardMedia
                style={cardStyles.media}
                image={
                  'https://www.trainingzone.co.uk/sites/default/files/styles/inline_banner/public/funstock.jpg?itok=gQ8J2CVl'
                }
                title={'Share your skills or learn something new'}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {'Share your skills or learn something new'}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {`Are you really good at something but not getting paid for it? List your skills and expertise and help others!`}
                  <br></br>
                  <br></br>
                  {`Looking to learn something new but you don't know where to start! Find an expert and start building your skillset`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid container justify='center' className='listingTypeRow'>
          <Card style={cardStyles.card}>
            <CardActionArea>
              <CardMedia
                style={cardStyles.media}
                image={'https://miro.medium.com/max/1125/0*gkc2Yz8yPBqtnRAS'}
                title={
                  'Make some money on the side and contribute to the shared economy!'
                }
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {
                    'Make some money on the side and contribute to the shared economy!'
                  }
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {`Looking for a new side hustle that's also good for the Earth? Borrow items and contribute to reduced waste that a shared economy supports.`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default ListingTypes;
