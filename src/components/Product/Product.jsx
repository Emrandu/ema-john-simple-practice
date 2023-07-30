import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, id, img, price, ratings, seller} = props.product;
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
               <button className='btn-cart'>Add to Cart</button>
                
            </div>
        </div>
    );
};

export default Product;