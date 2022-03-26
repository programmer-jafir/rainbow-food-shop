import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Food.css'

const Food = (props) => {
    const {handleAddToCart, food} = props;
    const {name, img, price, ratings} = food;
    return (
        <div className='food'>
            <img src={img} alt="" />
            <div className='food-info'>
            <p className='food-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Ratings: {ratings} stars</small></p>

            </div>
            <button onClick={() => handleAddToCart(food)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Food;