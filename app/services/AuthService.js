import Auth0Lock from 'auth0-lock';

export default class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {
      closable: false,
    });
    this.lock.on('authenticated', this.doAuthentication.bind(this));
    this.login = this.login.bind(this);
  }

  doAuthentication(authResult) {
    this.setToken(authResult.idToken);
  }

  login() {
    this.lock.show();
  }

  loggedIn() {
    return !!this.getToken();
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}
