import React from 'react'
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Home And Login</div>
        <div>Functionality</div>
        <div>Vocie</div>
        <div>Easy to Setup: Steps</div>
      </div>
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
)(Home);