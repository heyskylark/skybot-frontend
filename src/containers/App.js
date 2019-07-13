import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import routes from 'routes';
import NavBar from 'components/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import * as appLoadActions from 'actions/appLoad';
import * as loginActions from 'actions/login';

class App extends React.Component {
  constructor(props) {
    super(props);
    library.add(fab);
  }

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
