import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  const { getTotalCalorie } = useContext(StoreContext)
  return (
   
      <>
       <div className='place-order'><h1>Nutrional calculator</h1>
        <div className='.place-oredr-left'>
          <h4>Total Calories of your food you ordered</h4>
          <hr />
          <div className="calorie">
          
            <p>{getTotalCalorie()}</p>
          </div>


        </div>

        <div className="palce-order-right">
          <div className="cart-total">
            <h2>Cart totals</h2>

            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
           
          </div>

        </div>
      
        </div>
      </>


  )
}

export default PlaceOrder