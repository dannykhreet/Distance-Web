import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://test-969b8.firebaseio.com'
})


export default instance