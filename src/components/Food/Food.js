import React from 'react';
import './Food.css'

const Food = (props) => {
    const {name, img, price, ratings} = props.food;
    return (
        <div className='food'>
            <img src={img} alt="" />
            <div className='food-info'>
            <p className='food-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Ratings: {ratings} stars</small></p>

            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Food;