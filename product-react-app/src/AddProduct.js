//상품이름, 상품재고, 상품가격을 입력할 수 있는 필드
//등록버튼이 있다.
//내용을 다 입력하고 등록버튼을 누르면 백엔드에 추가해달라고 요청
//추가를 마치면 창을 닫고 추가버튼을 보이게 만든다.

import { useState } from "react";

function AppProduct(){
    //상품 정보를 저장할 수 있는 state
    const [product, setProduct] = useState({ProductName:"",ProductStock:"",ProductPrice:""})

    //state의 구조분해 할당
    const {productName, productStock, productPrice} = product;

    const onChange = (e) => {
        const {value, name} = e.target;
        setProduct(
            {
                ...product,
                [name] : value
            }
        )
    }
    
    const onButtonClick = () => {
        console.log(product);
    }

    return(
        <div className="register-wrap" style={{width: '500px'}}>
            <div>
                <input 
                    style={{width:'98%'}} 
                    value={productName} 
                    onChange={onChange} 
                    name='productName' 
                    placeholder="상품 이름" 
                />
                <input 
                    style={{width:'98%'}} 
                    value={productStock} 
                    onChange={onChange} 
                    name='productStock' 
                    placeholder="상품 재고" 
                />
                <input 
                    style={{width:'98%'}} 
                    value={productPrice} 
                    onChange={onChange} 
                    name='productPrice' 
                    placeholder="상품 가격" 
                />
            </div>
            <input type="button" value="등록" onClick={onButtonClick} style={{width:'100%'}}/>
        </div>
    )
}