import Axios from "axios"
import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM } from "../constants/BasketConstant";

export const addToBasket = (productId, qty) => async(dispatch, getState) => {
    const{data} = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: BASKET_ADD_ITEM,
        payload:{ //requesting add to basket from store.
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        }
    });
    localStorage.setItem('basketItems', JSON.stringify(getState().basket.basketItems)); //add basket items to local storage.
}
export const removeFromBasket = (productId) => (dispatch, getState) =>{
    dispatch({type: BASKET_REMOVE_ITEM, payload: productId});
    localStorage.setItem('basketItems', JSON.stringify(getState().basket.basketItems));


}