import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './FoodCard.css'

const FoodCard = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])


    const handleAddToCart = (food) =>{
        const newCart = [...cart,food];
        setCart(newCart);
    }

    return (
        <div className='food-section'>
            <div className="foods-container">
                {
                    foods.map(food => <Food 
                        key={food.id}
                        food={food}
                        handleAddToCart={handleAddToCart}
                        ></Food>)
                }
            </div>
            <div className="cart-container">
                <h5 className='cart-name'>Selected Foods</h5>
                <div>
                {cart.map((item)=>(
                    <h4 key={item.id}>{item.name}</h4>))
                }
                </div>
            </div>
        </div>
    );
};

export default FoodCard;