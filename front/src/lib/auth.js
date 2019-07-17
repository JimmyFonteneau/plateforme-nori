import { setToken, removeToken } from './handleLocalStorage';

const student = {
  route: []
}

const enterprise = {
  routes: ['/protected']
}

const Auth = {
    isAuthenticated: false,
    authenticate(jwt, cb) {
      setToken(jwt);
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      removeToken();
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    },
    canAccess(path) {           
      const result = enterprise.routes.find(route => route === path)
      if (result !== undefined) {
        return true;
      }
      return false;
    }
  };

  export {Auth};