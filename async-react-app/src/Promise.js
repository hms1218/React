import { useEffect, useState } from "react";

export const PromiseDemo = () => {

    const [result, setResult] = useState(null);

    useEffect(() => {
        const promise = new Promise((resolve,reject) => {
            console.log(typeof resolve);
            console.log(typeof reject);
            resolve('완료');
        })
        promise
            .then(value => {
                console.log('Promise fullfilled with : ', value);
            })
            .catch(error => {
                console.log('Promise rejected with : ',error);
            })
    },[]);

    return(
        <div>
            <h2>Promise 결과</h2>
            <p>Promise 결과 : {result || "로딩 중 ..."}</p>
        </div>
    )
    
}

// Promise 체이닝
// 여러 비동기작업을 순차적으로 연결할 때 유용하다.
// .then()
// .catch()
// .finally()