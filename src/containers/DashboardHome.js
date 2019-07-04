import React from 'react'
import { connect } from 'react-redux';

class DashboardHome extends React.Component {
  render() {
    return (
      <div>Dashboard Home</div>
    )
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHome);