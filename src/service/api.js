import axios from 'axios'

const api = axios.create({
    baseURL: 'https://run.mocky.io/v3/29c9fcde-549f-49fc-9021-a85660530cef'
})

export default api;