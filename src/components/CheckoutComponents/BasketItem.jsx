import { Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import React from 'react'
import { useBasket } from '../../contexts/Basket';
import DeleteIcon from '@material-ui/icons/Delete'

function BasketItem({ id, title, imageurl, price, rating }) {

    const [{basket}, dispatch] = useBasket();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
            }
        })
    }

    return (
        <div className="basket_item">
            <img
                src={imageurl}
                alt="loading..."
                className="basket_item_image"
            />
            <div className="basket_item_info">
                <p>{title}</p>
                <p className="item_info_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="item_info_rating">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="read-only" value={rating} readOnly />
                    </Box>
                </div>
                <button className="remove_button" onClick={removeFromBasket}>Remove <DeleteIcon fontSize="small"/></button>
            </div>
        </div>
    )
}

export default BasketItem
