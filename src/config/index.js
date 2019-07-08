const dev = {
  BACKEND_URI: 'http://localhost:8080',
  FRONTEND_URI: 'http://localhost:3000',
  REDIRECT_URI: 'http://localhost:3000/authentication'
};

const prod = {
  BACKEND_URI: 'http://localhost:8080',
  FRONTEND_URI: 'http://localhost:3000',
  REDIRECT_URI: 'http://localhost:3000/dashboard'
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default {
  // Add common config values here
  // MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};