import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-weekly.firebaseio.com/'
})