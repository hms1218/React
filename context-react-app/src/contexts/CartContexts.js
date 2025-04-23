import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([]);

    //추가하기
    // * js에서 객체에 없는 프로퍼티를 쓰면 객체에 추가가 된다. *
    const addItem = (product) => {
        setItems((prevItems) => {
            //이미 추가 된 상태라면 개수만 +1
            const exist = prevItems.find(item => item.id === product.id);
            if(exist){
                return prevItems.map(item => 
                    item.id === product.id ? {...item, quantity: item.quantity+1} : item
                )
            }
            //배열에 제품 추가하기
            return [...prevItems, {...product, quantity:1}]
        })
    }

    //삭제하기
    const removeItem = (id) => {
        //매개변수로 넘어온 아이디 배열에서 일치하지 않는 아이디만 필터링
        setItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    //수정하기
    const updateQuantity = (id,quantity) => {
        setItems(prevItems => 
            //배열에서 매개변수로 넘어온 id랑 일치하는 요소 찾기
            //매개변수로 넘어온 quantity와 1을 비교해서 더 큰 수를 반환
            prevItems.map(item => 
                item.id === id ? {...item, quantity: Math.max(1,quantity)} : item
            )
        )
    }

    //장바구니 비우기
    const clearCart = () => {
        setItems([]);
    }

    return(
        <CartContext.Provider value={{items,addItem,removeItem,updateQuantity,clearCart}}>
            {children}
        </CartContext.Provider>
    )

}

// export {addItem,removeItem,updateQuantity,clearCart} ;