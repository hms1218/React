import { useEffect } from "react";

const SocialLogin = () => {
    const getUrlParameter = (name) => {
        //?user=hyun&age=25&token=xyz
        let search = window.location.search; //주소에서 ?뒤에 있는 쿼리스트링을 추출
        let params = new URLSearchParams(search); //파라미터를 추출 Map형태로 저장이된다.
        return params.get(name); //해당 이름의 파라미터 값을 반환
    };

    useEffect(() => {
        const token = getUrlParameter("token");
        console.log("토큰 파싱 : " + token);

        if(token){
            localStorage.setItem("ACCESS_TOKEN",token);//로컬스토리지에 토큰을 저장
            console.log("로컬스토리지에 저장 : ",localStorage.getItem("ACCESS_TOKEN"));
            window.location.replace("/");
        } else { //토큰이 없는경우
            window.location.replace("/login");
        }
    },[])

    return <div>로그인 처리 중입니다... </div>
    

    

    
}

export default SocialLogin;