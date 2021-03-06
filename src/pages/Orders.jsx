import React, { useEffect, useState } from 'react'
import Order from '../components/OrdersComponents/Order';
import '../components/OrdersComponents/Orders.css'
import { useBasket } from '../contexts/Basket';
import { db } from '../Firebase';

function Orders() {
    //eslint-disable-next-line
    const [{ user }, dispatch] = useBasket();
    const [orders, setOrders] = useState([]);
  
    // console.log(orders);
    useEffect(() => {
      if(user) {
          db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .orderBy('timestamp', 'desc')
          .onSnapshot(snapshot => (
              setOrders(snapshot.docs.map(doc => ({
                  id: doc.id,
                  data: doc.data()
              })))
          ))
      } else {
          setOrders([])
      }
  
    }, [user])
  
      return (
          <div className='orders'>
              <h1>Your Orders</h1>
  
              <div className='orders__order'>
                  {orders?.map(order => (
                      <Order key={order.id} order={order} />
                  ))}
              </div>
          </div>
      )
  }
  
  export default Orders