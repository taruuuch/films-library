import axios from 'axios'
import { SERVER_URI } from '../config/default'

export const apiProvider = axios.create({
  baseURL: `${SERVER_URI}/api/v1`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})