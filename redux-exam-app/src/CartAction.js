export const addToCart = (id,name) => ({
    type: 'ADD_TO_CART',
    payload: {id:id, name:name}
})

export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id
})