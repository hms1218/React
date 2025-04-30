import { useEffect } from "react";

//컴포넌트
//UI의 조각
const Counter = ({count,setCount}) => {

    // const count = props.count;
    // const setCount = props.setCount;

    //useEffect() 훅
    //컴포넌트가 렌더링됐을 때, 특정 작업을 수행할 수 있게해주는 훅
    //컴포넌트가 렌더링될 때 통신을 통해서 데이터를 조회를 해올 때 많이 쓴다. (ex.게시물)
    //의존성 배열 : 
    // 없으면 매 렌더링마다 useEffect의 콜백함수가 실행이 된다.
    // [] 빈배열이면 최초 렌더링시에만 useEffect가 실행됨
    // 특정값을 배열에 넣으면, 그 값들이 변경될 때마다 useEffect가 실행된다.
    useEffect(() => {
        console.log('useEffect 실행됨');
        //백엔드와 통신하는 코드
    },[count]);
    
    //JSX
    //HTML요소들을 JS와 함께 사용하는 문법
    const element = <h1>hello, JSX</h1>
    //const isLoggedIn = true;

    const items = ['사과', '바나나', '체리']
    return(
        //html코드(화면에서 보게될 ui)
        // <>   -> JSX Fragment : div는 쓰기 싫은데 안의 내용들을 하나로 묶어야 할 때 사용
        <>
            {element}
            {/* 조건부 렌더링 */}
            {/* {isLoggedIn ? 참일때 렌더링 컴포넌트 : 거짓일 때 렌더링 컴포넌트}   => 3항연산자*/}
            {/* {isLoggedIn && 컴포넌트} -> 참일때만 렌더링(거짓일 때는 안보이게 할 때 사용)*/}
            <ul>
                {/* map메서드를 이용하여 배열에 있는 내용을 출력 */}
                {/* 콜백함수에서 (item,index) => (<li key={index}>{item}</li>)
                    콜백함수를 소괄호로 묶으면 안에 있는 내용을 묵시적으로 반환하겠다. 
                    중괄호를 쓴다면 return을 앞에 쓴다. 
                    (item,index) => return {<li key={index}>{item}</li>}*/}
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {/* 스타일을 줄 때는 객체형식으로 줘야한다. ={{color:red}}*/}
            <h2 style={{color:'red', fontSize:32}}>{count}</h2>
            {/* 태그에 속성을 줄 때 반드시 카멜표기법으로 써야한다. (onClick) */}
            <button onClick={() => {setCount(count+1)}}>+</button>
        </>
    )
}

//컴포넌트를 생성하고 난 뒤에는 내보내기를 해줘야한다.
//export default Counter; // import할 때 중괄호 생략가능하고 이름을 마음대로 써도된다.(default는 하나만 내보낼 수 있기 때문)

export {Counter}; // 내보내기 할때도 중괄호, import할 때도 중괄호, 이름을 맞춰서 써야함.