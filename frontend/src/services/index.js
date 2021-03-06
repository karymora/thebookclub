import axios from 'axios'
const baseURL = 'https://shielded-badlands-63465.herokuapp.com/auth'

const SERVICE = axios.create({ withCredentials: true, baseURL })

const AUTH_SERVICE = {
  signup: async user => {
    return await SERVICE.post('/signup', user)
  },
  login: async user => {
    return await SERVICE.post('/login', user)
  },
  logOut: async () => {
    return await SERVICE.get('/')
  },
  edit: async updateUser => {
    return await SERVICE.put('/edit', updateUser)
  },
  addbook: async book => {
    return await SERVICE.post('/addbook', book)
  },

  addmeeting: async meeting => {
    return await SERVICE.post('/addmeeting', meeting)
  },

  joinMeeting: async meeting => {
    return await SERVICE.post('/joinmeeting', meeting)
  },

  addToBookshelf: async book => {
    return await SERVICE.post('/addToBookshelf', book)
  }
}

export default AUTH_SERVICE
