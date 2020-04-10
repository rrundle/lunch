import * as types from '../constant/actionTypes'
import 'react-toastify/dist/ReactToastify.min.css'
import Products from '../data/products'

export const getProductList = () => ({
  type: types.GET_ALL_PRODUCT,
})

export const getList = () => ({
  type: types.GET_LIST,
  payload: Products,
})

export const selectedItem = (productId) => ({
  type: types.SELECTED_PRODUCT,
  payload: { productId },
})

export const getSingleItem = (productId) => ({
  type: types.GET_SINGLE_ITEM,
  payload: { productId },
})

//its all use for cart
export const addToCart = (product, qty) => (dispatch) => {
  dispatch(addToCartUnsafe(product, qty))
}
export const addToCartAndRemoveWishlist = (product, qty) => (dispatch) => {
  dispatch(addToCartUnsafe(product, qty))
}
export const addToCartUnsafe = (product, qty) => ({
  type: types.ADD_TO_CART,
  payload: { product, qty },
})
export const removeFromCart = (product_id) => (dispatch) => {
  dispatch({
    type: types.REMOVE_FROM_CART,
    product_id,
  })
}

export const incrementQty = (product, qty) => (dispatch) => {
  dispatch(addToCartUnsafe(product, qty))
}
export const decrementQty = (productId) => (dispatch) => {
  dispatch({
    type: types.DECREMENT_QTY,
    productId,
  })
}

//it seems that I should probably use this as the basis for "Wishlist"
export const addToWishlist = (product) => (dispatch) => {
  dispatch(addToWishlistUnsafe(product))
}

export const addToWishlistUnsafe = (product) => ({
  type: types.ADD_TO_WISHLIST,
  product,
})
export const removeFromWishlist = (product_id) => (dispatch) => {
  dispatch({
    type: types.REMOVE_FROM_WISHLIST,
    product_id,
  })
}

// Filters
export const filterBrand = (brand) => ({
  type: types.FILTER_BRAND,
  brand,
})
export const filterColor = (color) => ({
  type: types.FILTER_COLOR,
  color,
})
export const filterPrice = (value) => ({
  type: types.FILTER_PRICE,
  value,
})
export const filterSort = (sort_by) => ({
  type: types.SORT_BY,
  payload: sort_by,
})

// Currency
export const changeCurrency = (symbol) => ({
  type: types.CHANGE_CURRENCY,
  symbol,
})
