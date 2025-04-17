import React from 'react';

//함수형 컴포넌트의 정의
//컴포넌트의 이름을 정의할 때 대문자로 시작한다.
//let props = {name:"John"}
export function Greeting({name}) {
// JSX문법으로 HTML조각을 반환할 수 있다.
  return <h1>Hello,{name}!</h1>;
//<div>
//  하나의 루트요소만 반환할 수 있다.
//  여러 요소를 반환할 때는 반드시 하나의 요소로 감싸야 한다.
//  <h1>Hello, {name}!</h1>;
//  <h2>bye, {props.name}!</h2>;
//</div>
}

export function Farewell(props){
    return <h1>Goodbye, {props.name} </h1>
}