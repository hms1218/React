import axios from "axios"

export const Fetch = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log(response)) // json형식으로 응답을 반환 
        // .then(data => console.log(data)) // 데이터의 출력
        // .catch(error => console.log('Error : ',error)) // 에러 처리
}

export const Axois = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log(response.data))
        .catch(error => console.log('Error',error))
}

//response
//응답에 대한 메타정보와 본문
//status : http 상태코드
//headers : 응답 헤더를 담고있는 개체
//ok : status가 200~299 사이면 true
//url : 요청을 보낸 최종 url

//본문
//response의 body는 ReadbleStream이기 때문에 직접 읽어서 파싱해야한다.
//json() -> json문자열을 파싱하여 자바스크립트 객체로 반환


// fetch API
// 브라우저에서 제공하는 비동기 네트워크 요청을 수행하는 기본 API입니다.
// Promise를 반환하며, 네트워크 요청의 성공 여부에 따라 성공 또는 실패 상태로 처리된다.

// JSON(JavaScript Object Notation)
// - 경량의 데이터 교환 형식으로, 사람도 읽기 쉽고, 기계도 구문을 분석하기 쉬운 텍스트이다.
// - 주로 클라이언트와 서버 간의 구조화 된 데이터를 주고받거나, 설정파일, 로그 기록 등에 널리 사용된다.

// JS객체
// {name:"홍길동", age : 30}

// JSON
// {"name" : "홍길동" , "age", 30}    -> key도 감싸야한다.
// value에 들어갈 수 있는 타입 : 문자열, 숫자(정수,실수), 논리형값(true,false), null, 객체

//axios
//Promise기반의 HTTP요청 라이브러리
//fetch api보다 사용법이 직관적이며, 여러가지 기능을 제공한다.