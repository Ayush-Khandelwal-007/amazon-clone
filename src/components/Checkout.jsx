import React from 'react'
import BasketContent from './CheckoutComponents/BasketContent'
import './CheckoutComponents/Checkout.css'
import Subtotal from './CheckoutComponents/Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <img
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="Ad"
                className="advertisement" />
            <div className="checkout_content">
                <BasketContent />
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
