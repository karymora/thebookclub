import axios from 'axios'
const baseURL = 'http://localhost:3000/auth'

const SERVICE = axios.create({ withCredentials: true, baseURL })

const AUTH_SERVICE = {
  signup: async user => {
    return await SERVICE.post('/signup', user)
  },
  login: async user => {
    return await SERVICE.post('/login', user)
  },
  logOut: async () => {
    return await SERVICE.get('/logout')
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

  addBook: async book => {
    return await SERVICE.post('/addbook', book)
  }
}

export default AUTH_SERVICE
