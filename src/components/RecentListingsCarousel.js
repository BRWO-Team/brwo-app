import React from 'react';
import Flickity from 'react-flickity-component';

import MediaCard from './MediaCard';

const flickityOptions = {
  initialIndex: 0
};

class Carousel extends React.Component {
  render() {
    return (
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {this.props.items &&
          this.props.items.map((item, i) => {
            return (
              <MediaCard
                title={item.title}
                description={item.description}
                image={item.images[0]}
              />
            );
          })}
      </Flickity>
    );
  }
}

export default Carousel;
