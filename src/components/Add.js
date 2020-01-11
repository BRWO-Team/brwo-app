import React from 'react';
import AddFormControl from '../components/AddFormControl';
import { connect } from 'react-redux';
import { changeRoute } from '../actions/router.action';

class Add extends React.Component {
  render() {
    return (
      <div className='add'>
        <AddFormControl />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute
})(Add);

export { Add };
