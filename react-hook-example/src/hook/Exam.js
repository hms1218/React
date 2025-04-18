import { useState } from "react";

let ShowHide = () => {

    const[show, setShow] = useState("Hello,React");

    let handleClick = () => {
        show ? setShow("") : setShow("Hello,React");
    }

    return(
        <div>
            <button onClick={handleClick}>{show ? '숨기기' : '보이기'}</button>
            <h1>{show}</h1>
        </div>
    )
}

// export default ShowHide;

// Exam.js 파일을 만들고
// ShowHide() 컴포넌트를 만든다.

// 버튼이 있다. 버튼문구 '숨기기' '보이기'
// Hello, React 문구가 보이고

// 버튼을 누르면 Hello, React가 보였다 안보였다

// 컴포넌트는 App에서 호출해서 확인

// let ShowHide = () => {

//     const[show, setShow] = useState(false);

//     let handleClick = () => {
//          setShow(prev => !prev);
//     }

//     return(
//         <div>
//             <button onClick={handleClick}>{show ? '숨기기' : '보이기'}</button>
//             {show && <h1>"Hello, React"</h1>}
//         </div>
//     )
// }

//컴포넌트명은 Sol1

let Sol1 = () => {

    const[eating, setEating] = useState(['초콜릿', '사탕']);
    const[value, setValue] = useState("");

    const onButtonClick = () => {
        setEating(prev => [value, ...prev])
        setValue("")
    } 

    const inputHandler = (e) => {
        setValue(e.target.value);
    }

    const enterKeyEventHandler = (e) => {
        if(e.key === "Enter"){
            onButtonClick();
        }
    }
    
    return(
        <div>
            <input type="text" onChange={inputHandler} onKeyDown={enterKeyEventHandler} value={value}/>
            <button  onClick={onButtonClick}>추가</button>
            <ul>
                {eating.map((item,idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Sol1;