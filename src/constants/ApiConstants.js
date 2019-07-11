const ApiConstants = {
  loginUrl: (hostUri, redirectUri) => {
    return `${hostUri}/oauth2/authorize/twitch?redirect_uri=${redirectUri}`;
  },
  websocketUrl: (hostUri) => {
    return `${hostUri}/ws`;
  }
};

export default ApiConstants;
