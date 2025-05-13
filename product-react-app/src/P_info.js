import { useState } from "react";

export const P_Info = ({items}) => {

    const [isAdd, setIsAdd] = useState(false);

    const [inputs, setInputs] = useState({
        name: '',
        stock: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
        ...prev,
        [name]: value
        }));
    };

    //상품 번호, 상품 이름, 상품 재고, 상품 가격, 등록 날짜, 수정 날짜
    const headers = ['상품 번호','상품 이름','상품 재고', '상품 가격','등록 날짜','수정 날짜'];

    const addClick = () => {
        if(isAdd){
            setIsAdd(false);
        }else{
            setIsAdd(true);
        }
    }

    return(
        <div>
            {isAdd && (
                <div>
                <input
                    type="text"
                    name="name"
                    placeholder="상품 이름"
                    value={inputs.name}
                    onChange={handleChange}
                /><br/>
                <input
                    type="text"
                    name="stock"
                    placeholder="상품 재고"
                    value={inputs.stock}
                    onChange={handleChange}
                /><br/>
                <input
                    type="text"
                    name="price"
                    placeholder="상품 가격"
                    value={inputs.price}
                    onChange={handleChange}
                /><br/>
                </div>
            )}
            <button onClick={addClick}>{isAdd ? "등록" : "상품 추가"}</button>
            <table border="1">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map((item,id) => (
                     <tr key={id}>
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
        </div>
    )
}