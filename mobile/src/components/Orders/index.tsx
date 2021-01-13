import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import Header from '../Header'
import OrderCard from '../OrderCard'

import { fetchOrders } from '../../api'
import { Order } from '../../../types'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetchOrders()
      .then((res) => setOrders(res.data))
      .catch((err) => Alert.alert('Houve um erro ao buscar os pedidos!'))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (
          orders.map((order) => (
            <TouchableWithoutFeedback key={order.id}>
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
})
