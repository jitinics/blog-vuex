import HttRequest from './HttpRequest'

class UserProvider extends HttRequest {
  constructor() {
    super()
  }
  signIn(username, password) {
    return this.post('/user/signin', {
      email: username,
      password
    })
  }
}

export default new UserProvider()