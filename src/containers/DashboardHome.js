import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DashboardHome extends React.Component {
  render() {
    const { meState } = this.props;
    const { user } = meState;
    const { name } = user;

    return (
      <div>
        <div>User: { name }</div>
        <div>Dashboard Home</div>
      </div>
    )
  }
}

DashboardHome.propTypes = {
  meState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    meState: state.meState
  };
}

export default connect(
  mapStateToProps
)(DashboardHome);
