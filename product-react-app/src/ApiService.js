import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

// const apiClient = axios.create({
//     baseURL : API_BASE_URL,
//     headers : {
//         "Content-Type":"application/json"
//     }
// })

export function call(api,method,request){

    let headers = new Headers({
        "Content-Type":"application/json"
    })

    //기본 옵션 설정
    let options = {
        url : API_BASE_URL + api,
        method : method,
        headers:headers
    }

    //false, 0, 빈 문자열, null, undefined, NaN  => false로 취급
    if(request){
        //JSON.stringify() : 객체를 JSON문자열로 변환
        options.data = JSON.stringify(request);
    }

    //앞서 설정한 options 객체를 사용하여 axios로 HTTP요청을 보낸다.
    return axios(options)
        //요청이 성공적으로 처리된 경우 실행되는 코드이다.
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log("에러코드 : ", error.status);
            if(error.status === 403){
                //403코드면 로그인 path로 가라
                window.location.href="/product2";
            }
        })

    // return apiClient({
    //     url : api,
    //     method,
    //     data : request || undefined
    // })
    //     .then(res => res.data)
}
