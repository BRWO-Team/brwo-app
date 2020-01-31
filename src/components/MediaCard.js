import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const cardStyles = {
  card: {
    maxWidth: 345,
    minWidth: 200,
    marginRight: 10,
    marginTop: 30,
    marginBottom: 20,
    maxHeight: 300
  },
  media: {
    height: 140
  }
};

class MediaCard extends React.Component {
  //takes image, title, and description
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card style={cardStyles.card}>
          <CardActionArea>
            <CardMedia
              style={cardStyles.media}
              image={this.props.image}
              title={this.props.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {this.props.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {this.props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default MediaCard;
