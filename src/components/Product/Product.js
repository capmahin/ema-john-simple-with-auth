import React from 'react';
import './Product.css'

const Product = ({product , handleAddToCart}) => {
    // const {product , handleAddToCart} = props;
    
    const {name , price ,img ,seller,ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Rating:{ratings} stars</small></p>
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;