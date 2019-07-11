import React from 'react'
import config from 'config';
import ApiConstants from 'constants/ApiConstants';
import SockJsClient from 'react-stomp';

class StreamClient extends React.Component {
  render() {
    const debug = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    const { match } = this.props;
    const { params = {} } = match;
    const { userToken } = params;
    const headers = {
      Authorization: `Bearer ${userToken}`
    };
    const wsSourceUrl = ApiConstants.websocketUrl(config.BACKEND_URI);

    return (
      <div>
        <div>Stream Client: { userToken }</div>

        <SockJsClient url={ wsSourceUrl } topics={["/topic/public"]}
          headers={ headers }
          subscribeHeaders={ headers }
          onMessage={ this.onMessageReceive } ref={ (client) => { this.clientRef = client }}
          onConnect={ () => { console.log('conntected'); this.setState({ clientConnected: true }) } }
          onDisconnect={ () => { this.setState({ clientConnected: false }) } }
          debug={ debug }/>
      </div>
    )
  }

  onMessageReceive = (msg, topic) => {
    console.log('topic: ' + topic + ' msg: ' + msg);
  }
}

export default StreamClient;
