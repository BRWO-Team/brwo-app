import React from 'react';
import AddFormControl from './AddFormControl';
import { connect } from 'react-redux';
import { changeRoute } from '../actions/router.action';

class AddWeb extends React.Component {
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
})(AddWeb);

export { AddWeb };
