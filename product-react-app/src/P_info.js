import { useEffect, useState } from "react";
import './style.css'
import { call } from "./ApiService";

export const P_Info = ({items,add}) => {

    const {setItems} = items;
    
    const [isAdd, setIsAdd] = useState(false);

    const [inputs, setInputs] = useState({
        name: '',
        stock: '',
        price: ''
    });

    //라디오 버튼의 index를 저장하는 state
    const [selectedIndex, setSelectedIndex] = useState(null);

    //주문개수를 저장하는 state
    const [orderCount, setOrderCount] = useState('');

    //클릭한 라디오버튼의 index
    const handleRadioChange = (index) => {
        setSelectedIndex(index);
    }

    const handleOrderCountChange = (e) => {
        setOrderCount(e.target.value);
        if(e.target.value < 0){
            setOrderCount(0);
        }
    }

    useEffect(() => {
        
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
        ...prev,
        [name]: value
        }));
    };

    //주문완료버튼
    const orderProduct = () => {
        if(selectedIndex && orderCount > 0 && items[selectedIndex-1]){
            const orderData = {
                productId : items[selectedIndex -1].productId,
                productCount : parseInt(orderCount)
            };
            call("/orders","POST",orderData)
                .then(result => setItems(result.data));
        }
    }

    //단일선택, 주문개수, 상품 번호, 상품 이름, 상품 재고, 상품 가격, 등록 날짜, 수정 날짜
    const headers = ['단일 선택','주문개수','상품 번호','상품 이름','상품 재고', '상품 가격','등록 날짜','수정 날짜'];

    const addClick = () => {
        if(isAdd){
            if(inputs.name.length === 0){
                alert("이름을 입력하세요.")
            }else if(inputs.stock.length === 0){
                alert("재고를 입력하세요.")
            }else if(inputs.price.length===0){
                alert("가격을 입력하세요.")
            }
            else{
                add(inputs);
                setInputs({ name: '', stock: '', price: '' });
                setIsAdd(false);
            }
            console.log(inputs.price.length)
            
        }else{
            setIsAdd(true);
        }
    }

    return(
        <div className="container">
            {isAdd && (
                <div>
                <input
                    style={{width:'20vw', padding:8, marginBottom:5}}
                    type="text"
                    name="name"
                    placeholder="상품 이름"
                    value={inputs.name}
                    onChange={handleChange}
                /><br/>
                <input
                    style={{width:'20vw', padding:8, marginBottom:5}}
                    type="text"
                    name="stock"
                    placeholder="상품 재고"
                    value={inputs.stock}
                    onChange={handleChange}
                /><br/>
                <input
                    style={{width:'20vw', padding:8, marginBottom:5}}
                    type="text"
                    name="price"
                    placeholder="상품 가격"
                    value={inputs.price}
                    onChange={handleChange}
                /><br/>
                </div>
            )}
            <button style={{width:'5vw', padding:8, marginBottom:5}} onClick={addClick}>{isAdd ? "등록" : "상품 추가"}</button>
            {items.length > 0 && (
                <div>
                <table border="1">
                <thead>
                    <tr> 
                        {headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item,index) => (
                        <tr key={index}>
                            <td><input type="radio" name="id" onChange={() => handleRadioChange(index+1) } checked={selectedIndex === index+1}/></td>
                            <td><input type="number" value={selectedIndex === index+1 ? orderCount : ''} onChange={handleOrderCountChange} readOnly={selectedIndex !== index+1} /></td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.stock}</td>
                            <td>{item.price}</td>
                            <td>{item.registerDate}</td>
                            <td>{item.updateDate}</td>
                        </tr>   
                    ))}   
                </tbody>
            </table>
            <button type="button" id="order-done" onClick={orderProduct}>주문완료</button><button type="button" id="order-done">주문내역</button>
            </div>
            )}
        </div>
    )
}