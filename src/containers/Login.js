import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from 'components/Button';
import ApiConstants from 'constants/ApiConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from 'config';

class Login extends React.Component {
  onClickLogin = () => {
    const loginUri = ApiConstants.loginUrl(config.BACKEND_URI, config.REDIRECT_URI);
    window.location.assign(loginUri);
  }

  render() {
    const { loginState } = this.props;
    const { isAuthenticated } = loginState;

    if (isAuthenticated) {
      return (
        <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} />
      )
    } else {
      const classes = {
        'login-button': true,
        'button--twitch': true
      };

      return (
        <div>
          <Button
            icon={<FontAwesomeIcon icon={['fab', 'twitch']} />}
            text={'Login In With Twitch'}
            classes={classes}
            onClick={() => this.onClickLogin()}
          />
        </div>
      )
    }
  }
}

Login.propTypes = {
  loginState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    loginState: state.loginState
  };
}

export default connect(
  mapStateToProps
)(Login);
