import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:4010',
  headers: {
    authorization: 'Bearer 123'
  }
})

export default http
