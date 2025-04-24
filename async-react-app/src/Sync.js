//동기처리
//한 번에 하나의 작업만 처리되며, 작업이 완료될 때까지 다음 작업을 진행할 수 없다.
export const Sync = () => {
    const performHeavyTask = () => {
        return "두번째 작업 시작"
    }

    console.log('첫번째 작업 시작');
    console.log(performHeavyTask());
    console.log('다음 작업 진행');
}

//비동기 처리
//작업이 완료되기를 기다리지 않고, 다른 작업을 동시에 진행할 수 있다.
//결과가 준비되면, 그 시점에 맞춰 특정 작업을 처리할 수 있도록 한다.
export const Async = () => {
    // console.log("첫번째 작업 시작")
    // setTimeout(() => {
    //     console.log("첫번째 작업 완료")
    // },2000);
    // console.log("다음 작업 진행");

    //콜백함수 예제
    // function fetchData(callBack){
    //     setTimeout(() => {
    //         const data = '서버에서 받은 데이터';
    //         callBack(data); //2초가 지난 후 콜백함수를 실행
    //     },2000)
    // }

    // console.log('API 요청 시작')
    // fetchData((result) => {
    //     console.log('API 응답 : ', result)
    // });
    // console.log('다음 작업 진행')

    //Promise객체 예제
    // const fetchData = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const success = true; // 성공 여부
    //             if(success){
    //                 resolve('데이터 받아옴');
    //             } else{
    //                 reject('통신 실패');
    //             }
    //         }, 2000);
    //     });
    // }
    // console.log('API 요청 시작');
    // fetchData()
    //     .then(data => {
    //         console.log('API 응답 : ',data);
    //     }) //then() : Promise가 성공(resolve가 호출)하면 실행되는 콜백 함수
    //     .catch(error => {
    //         console.log('에러 : ',error);
    //     });
    // console.log('다음 작업 진행');

    //비동기 함수 생성
    // const fetchData = async () => {
    //     return '데이터'
    // }

    //문자열을 반환하는 것처럼 보이지만 실제로는 Promise객체를 반환한다.
    // fetchData().then(data => console.log(data));

    //await
    const fetchData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('데이터 받아옴');
            },2000);
        })
    }

    const getData = async () => {
        console.log('API 요청 시작');
        const data = await fetchData(); //2초 후 데이터를 얻어오는 함수
        console.log('API 응답 : ', data);
        console.log('다음작업 진행');
    }

    console.log('함수 밖 진행 전');
    getData();
    console.log('함수 밖 진행 후');
}

// 비동기처리가 중요한 이유
// - 주로 시간이 오래 걸리는 작업을 처리할 때 유용하다.
// - 만약 시간이 오래 걸리는 작업을 동기방식으로 처리한다면, 작업이 완료될 때까지
//   어플리케이션이 멈추게 되어 사용자가 불편을 겪을 수 있다.
// - 비동기 처리를 사용하면, 작업이 완료될 때까지 기다리는 동안에도 다른 작업을 실행할 수 있다.

// 비동기 처리의 주요 패턴
// 1. 콜백함수(Callback Function)
// - 특정 작업이 완료된 후 호출되는 함수
// - 외부 데이터 요청이 완료되었을 때 실행될 함수를 전달하여, 해당 작업이 끝난 후 처리하게 할 수 있다.

// 2. Promise객체
// - 비동기 작업이 완료되었을 때 성공 또는 실패 결과를 반환하는 객체
// - PromiseState : fulfilled -> 성공 error -> 실패

// 3. async/await
// - Promise를 기반으로 한 비동기 처리 방식으로, 동기처리처럼 보이지만 비동기 작업을 수행할 수 있게 해준다.
// async : 함수 앞에 붙여서 해당 함수가 비동기 함수임을 나타낸다.
// 비동기 함수의 반환값은 항상 Promise객체이다.
// await : 비동기 함수 안에서만 사용할 수 있고, Promise가 처리될 때까지 함수를 일시적으로 중지한다.
// Promise가 resolve되면, 그 값을 반환받아 동기적으로 코드가 실행되는 것처럼 이어진다.

// 비동기 처리의 장점
// 1. ui 반응성 유지
// - 무거운 작업을 수행할 때도 어플리케이션이 멈추지 않고 계속해서 동작한다.
// 2. 성능 최적화
// - 네트워크 요청, 파일 읽기 등 시간이 오래걸리는 작업이 완료될 때 까지 기다리지 않고, 다른 작업을 동시에 수행할 수 있다.
// 3. 사용자 경험 향상
// - 데이터를 처리하거나 로딩하는 동안에도 어플리케이션이 반응하며, 사용자에게 즉각적인 피드백을 제공할 수 있다.
// 다른 서버와 통신을 할 때 많이 사용을 한다.
// React에서 다른 서버(API)와 통신하는 가장 기본적인 방법은 fetch API와 Axios 라이브러리를 사용하는 것이다.
