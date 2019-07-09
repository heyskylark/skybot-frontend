import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import 'styles/App.css';
import { ConnectedRouter } from 'connected-react-router';
import routes from 'routes'

import * as appLoadActions from 'actions/appLoad';

class App extends React.Component {
  componentDidMount() {
    this.props.appLoadActions.checkUserStatus();
  }

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
  appLoadActions: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    appLoadActions: bindActionCreators(appLoadActions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
