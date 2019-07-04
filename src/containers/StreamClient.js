import React from 'react'
import { connect } from 'react-redux';

class StreamClient extends React.Component {
  render() {
    const { match } = this.props;
    const { params = {} } = match;
    const { userId } = params;

    return (
      <div>Stream Client: { userId }</div>
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
)(StreamClient);