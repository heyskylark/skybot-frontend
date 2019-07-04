import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import 'styles/App.css';
import { ConnectedRouter } from 'connected-react-router';
import routes from 'routes'

class App extends React.Component {
  render() {
    const { history } = this.props;
    return(
      <ConnectedRouter history={ history }>
        { routes }
      </ConnectedRouter>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
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
)(App);
