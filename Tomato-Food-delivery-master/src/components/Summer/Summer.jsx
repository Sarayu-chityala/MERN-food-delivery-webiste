import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './Summer.css'

const Summer = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Summer dishes for you</h2>
            <div className="food-display-list">
                {food_list
                    .filter((item, index) => index > 31 && index < 36)
                    .map((item, index) => (
                        <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))
                }


            </div>
        </div>
    )

}

export default Summer
