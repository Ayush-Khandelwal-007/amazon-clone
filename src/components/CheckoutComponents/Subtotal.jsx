import React from 'react'
import CurrencyFormat from "react-currency-format"
// import { useHistory } from "react-router-dom";
import { useBasket } from '../../contexts/Basket';
import { getBasketTotal, getBasketTotalQuantity } from '../../contexts/reducer';

function Subtotal() {

  // const history = useHistory();
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useBasket();

  return (
    <div className="checkout_subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({getBasketTotalQuantity(basket)} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
