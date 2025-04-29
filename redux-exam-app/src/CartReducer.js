const initialState = {
    products: []
}

export const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            const existProducts = state.products.find(product => product.id === action.payload.id);
            if(existProducts){ // 이미 제품이 있으면
                return{
                    ...state,
                    products: state.products.map((product)=> (
                        product.id === action.payload.id ? {...product, quantity: product.quantity+1} : product
                    ))
                }
            }else{ // 제품이 없으면 
                return{
                    ...state,
                    products: [...state.products, {id:action.payload.id, name:action.payload.name, quantity : 1}]
                }
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                products: state.products.filter((product) => product.id !== action.payload)
            }
        default :
            return state
    }
}