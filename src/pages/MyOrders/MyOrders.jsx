/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/userOrders`, 
        {}, 
        { headers: { token } }
      );

      if (response.data.success && Array.isArray(response.data.data)) {
        setData(response.data.data); // Only set data if it's an array
        console.log('Orders fetched:', response.data.data); // Debugging
      } else {
        console.error('Failed to fetch orders:', response.data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error fetching orders:', error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((cartData, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {cartData.items.map((item, idx) => (
                  <span key={idx}>
                    {item.name} x {item.quantity}
                    {idx < cartData.items.length - 1 && ', '}
                  </span>
                ))}
              </p>
              <p>₹{cartData.amount}.00</p>
              <p>Items: {cartData.items.length}</p>
              <p>
                <span>&#x25cf;</span> <b>{cartData.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          ))
        ) : (
          <p>No orders found</p> // Display message if no orders are found
        )}
      </div>
    </div>
  );
};

export default MyOrders;
