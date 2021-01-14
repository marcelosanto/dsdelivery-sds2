import axios from 'axios'
import { REACT_APP_API_URL } from '../url'

const API_URL = REACT_APP_API_URL

export function fetchOrders() {
  return axios(`${API_URL}/orders`)
}

export function confirDelivery(orderId: number) {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}
