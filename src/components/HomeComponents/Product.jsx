import React from 'react'
import './Product.css'

function Product({title,imageurl,price,rating}) {
    const stars=()=>{
        for(var i=0;i<rating;i++){
            <p>⭐️ </p>
        }
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        // array1.map((_,i,index)=>{
                        //     return(
                        //         <p key={index}>⭐️</p>
                        //     )
                        // })
                        stars()
                    }
                </div>
            </div>
            <img 
                src={imageurl} 
                alt="product_image" 
                className="product_image"
            />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
