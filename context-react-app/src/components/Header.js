import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContexts";

export const Header = () => {
    const {items} = useContext(CartContext);

    //reduce((sum,x) => sum+=x,0) : 0은 초기값, x는 변수, 결과는 sum
    //총 개수
    const totalCount = items.reduce((sum,item) => sum + item.quantity,0);
    //총 합(개수*가격)
    const totalPrice = items.reduce((sum,item) => sum + item.quantity * item.price,0);

    return(
        <div>
            <Link to="/products">Products</Link>{' | '} 
            <Link to="/cart">Cart({totalCount}) - {totalPrice}원</Link>
        </div>
    )
}