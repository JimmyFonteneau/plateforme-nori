const student = {
  route: []
}

const enterprise = {
  routes: ['/protected']
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
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

  export {fakeAuth};