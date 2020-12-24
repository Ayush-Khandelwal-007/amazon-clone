import React, { useEffect, useState } from 'react'
import CurrencyFormat from "react-currency-format"
import { useHistory } from "react-router-dom";
import { useBasket } from '../../contexts/Basket';
import { getBasketTotal, getBasketTotalQuantity } from '../../contexts/reducer';

function Subtotal() {

  const history = useHistory();
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useBasket();
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if(getBasketTotalQuantity(basket)>0){
      setDisabled(false);
    }
    else{
      setDisabled(true);
    }
  }, [basket])

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

      <button disabled={disabled} onClick={e => history.push("/payment") }>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
