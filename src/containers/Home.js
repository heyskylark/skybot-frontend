import React from 'react'
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>Home</div>
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