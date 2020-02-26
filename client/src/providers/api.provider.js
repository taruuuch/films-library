import axios from 'axios'

export const apiProvider = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})