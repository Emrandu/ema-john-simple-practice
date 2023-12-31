import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, id, img, price, ratings, seller} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div>
            <div className='product'>
                <img src={img} alt="" />
               <div className='product-info'>
               <h6 className='product-name'>Name:{name}</h6>
                <p>price:{price}</p>
                <p>Manufacturer:{seller}</p> 
                <p>Ratings:{ratings}</p>
               </div>
               <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to Cart
               <FontAwesomeIcon icon={faShoppingCart} />
               </button>
                
            </div>
        </div>
    );
};

export default Product;