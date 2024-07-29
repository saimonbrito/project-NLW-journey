import axios from 'axios'

export const api = axios.create({
    baseURL: 'atth://localhost:3333'
})