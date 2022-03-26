import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './FoodCard.css'

const FoodCard = () => {
    const [foods, setFoods] = useState([]);

    useEffect( () =>{
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    return (
        <div className='food-section'>
            <div className="foods-container">
                {
                    foods.map(food => <Food 
                        key={food.id}
                        food={food}
                        ></Food>)
                }
            </div>
            <div className="cart-container">
                <h4>Selected Clothes</h4>
            </div>
        </div>
    );
};

export default FoodCard;