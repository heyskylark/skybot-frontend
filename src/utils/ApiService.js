import superagent from 'superagent';
import config from 'config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  if (path.startsWith('http')) {
    return path;
  }

  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  const url = config.BACKEND_URI;
  return url + adjustedPath;
}

class ApiService {
  constructor() {
    methods.forEach(
      method =>
        (this[method] = (path, { params, data, headers = {} } = {}) =>
          new Promise((resolve, reject) => {
            const request = superagent[method](formatUrl(path));
            const token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : '';
            const tokenHeader = 'Authorization';
            headers = {
              ...headers,
              Accept: 'application/json',
            };

            let finalToken;
            if (tokenHeader in headers) {
              finalToken = headers[tokenHeader];
            } else if (token) {
              finalToken = token;
            }

            if (finalToken) {
              headers[tokenHeader] = `Bearer ${finalToken}`;
            }

            request.type('application/json');
            request.withCredentials();

            if (params) {
              request.query(params);
            }
            if (data) {
              request.send(data);
            }
            if (headers) {
              request.set(headers);
            }

            request.end((err, res = {}) => {
              // things to do at the end of a request, can log request

              let { body } = res;
              if (err) {
                if (body && typeof body === 'object') {
                  body.status = err.status;
                }

                if(err.status === 401 && !path.startsWith('login')) {
                  // logout
                  reject(body || err);
                } else {
                  reject(body || err);
                }
              } else {
                resolve(body);
              }
            });
          }))
    );
  }
}

export default new ApiService();