import React from 'react';


export default class Login extends React.Component {
  static propTypes = {
    location: React.PropTypes.object,
  };

  static contextTypes = {
    auth: React.PropTypes.object,
  };

  componentDidMount() {
    this.context.auth.login();
  }

  render() {
    return <div />;
  }
}
