import React from 'react'
import { useBasket } from '../../contexts/Basket';
import BasketItem from './BasketItem';

function BasketContent() {

    // eslint-disable-next-line
    const [state, dispatch] = useBasket();

    return (
        <div className="basket_content">
            <h1 className="checkout_title">Items in your Cart</h1>
            <div className="basketitems">
                {
                    state.basket?.map((item,index)=>{
                        return(
                            <BasketItem 
                            key={item.id}
                            index={index}
                            id={item.id}
                            title={item.title}
                            imageurl={item.imageurl}
                            price={item.price}
                            rating={item.rating}
                            quantity={item.quantity}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BasketContent
