import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import NavBar from 'components/NavBar';
import { ConnectedRouter } from 'connected-react-router';
import routes from 'routes'

import * as appLoadActions from 'actions/appLoad';
import * as loginActions from 'actions/login';

class App extends React.Component {
  componentDidMount() {
    this.props.appLoadActions.checkUserStatus();
  }

  render() {
    const { history, loginState, loginActions } = this.props;

    return(
      <div>
        <ConnectedRouter history={ history }>
          <NavBar 
            loginState={loginState}
            onClick={() => this.logout(loginActions)}
          />
          { routes }
        </ConnectedRouter>
      </div>
    ) 
  }

  logout(loginActions) {
    loginActions.logoutUser();
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  appLoadActions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    loginState: state.loginState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appLoadActions: bindActionCreators(appLoadActions, dispatch),
    loginActions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
