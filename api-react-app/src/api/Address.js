import { useState,useEffect } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

const Address = () => {

    const scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

    //훅을 사용하여 주소찾기 API를 팝업으로 실행할 준비
    const open = useDaumPostcodePopup(scriptUrl);

    const [postcode, setPostCode] = useState(''); //우편번호 저장하는 state
    const [address, setAddress] = useState(''); //주소를 저장하는 state
    const [detailAddress, setDetailAddress] = useState(''); //상세 주소를 저장하는 state
    const [extraAddress, setExtraAddress] = useState(''); //참고 항목을 저장하는 state



    //주소 선택 완료 후 실행되는 함수
    const handleComplete = (data) => {
        let addr = '';
        let extraAddr = '';

        console.log(data)

        //addressType : R/J	검색된 기본 주소 타입: R(도로명), J(지번)
        //userSelectedType :R/J	검색 결과에서 사용자가 선택한 주소의 타입
        //roadAddress : 도로명주소
        //jibunAddress : 지번주소
        if(data.userSelectedType === 'R'){
            addr = data.roadAddress; //도로명 주소 선택시 도로명 주소 할당 해줘
        } else{
            addr = data.jibunAddress; //지번 주소 선택시 지번 주소 할당
        }

        //참고항목처리(도로명주소인 경우)
        if(data.userSelectedType === 'R'){
            //법정동명이 있는지 확인하고 추가(법정동, 법정리가 있을 때만)
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraAddr += data.bname;
            }
            //건물명이 있고 공통 주택일 경우 추가
            //apartment : Y/N 공통주택 여부 
            if(data.buildingName !== '' && data.apartment === 'Y'){
                extraAddr += extraAddr !== '' ? ', '+data.buildingName : data.buildingName;
            }
            //참고항목이 있다면 괄호로 감싸서 추가
            if(extraAddr !== ''){
                extraAddr = ` (${extraAddr})`;
            }
            //참고항목 state 업데이트
            setExtraAddress(extraAddr);
        }else{
            //지번 주소인 경우 참고 항목을 빈 문자열로 설정
            setExtraAddress('');
        }

        setPostCode(data.zonecode); //우편번호 설정
        setAddress(addr);

        //상세 주소 입력 필드로 포커스 이동하기
        document.querySelector('#sample6_detailAddress').focus();

    }

    //버튼을 눌러 팝업창을 연다.
    //onComplete : 우편번호 검색 결과 목록에서 특정 항목을 클릭한 경우, 해당 정보를 받아서 처리할 콜백 함수를 정의하는 부분
    // oncomplete: function(data){}
    const handleClick = () => {
        open({onComplete: handleComplete});
    }

    return(
        <div className="form-group">
            <div className="form-row">
                우편번호 : <input
                    type="text"
                    id="sample6_postcode"
                    placeholder="우편번호"
                    value={postcode}
                    readOnly
                />
                <input
                    type="button"
                    onClick={handleClick}
                    value="우편번호 찾기"
                />
                
            </div>
                주소 : <input
                    type="text"
                    id="sample6_address"
                    placeholder="주소"
                    value={address}
                    readOnly
                />
            <div className="form-row split">
                
                상세주소 : <input
                    type="text"
                    id="sample6_detailAddress"
                    placeholder="상세주소"
                    value={detailAddress}
                    onChange={(e) => setDetailAddress(e.target.value)}
                /><br/>
                참고항목 : <input
                    type="text"
                    id="sample6_extraAddress"
                    placeholder="참고항목"
                    value={extraAddress}
                    readOnly
                />
            </div>

        </div>
    )
}

export default Address;