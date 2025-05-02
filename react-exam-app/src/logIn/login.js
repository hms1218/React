import { useEffect, useState } from 'react'
import login_logo from '../logIn/login_logo.jpg'
import './styles.css';

export const Login = () => {

  const [id, setId] = useState("");
  const [message, setMessage] = useState('입력');
  const [isError, setIsError] = useState(true);

  const theme = "dark";

  const handleIdChange = (e) => {
    const value = e.target.value
    setId(value)
    setIsError(true);
    if(value.length === 0 ){
      setMessage('아이디를 입력하세요.')
    }
    else if (value.length < 5) {
      setMessage('아이디는 최소 5자 이상이어야 합니다.');
      
    } else{
      setMessage("아이디 완벽")
      setIsError(false);
    }
  }

  return(
    <div style={{textAlign: 'center'}} className={`navigation ${theme}`}>
      <img src={login_logo} alt="no" width={100} height={100} style={{marginBottom: 30}}/>
      <br/>
      <b>※회원구분을 위해 체크해 주세요</b>
      <input type='radio' value="student" id='student' name='users'/>
      <label for='student'>수강생</label>
      <input type='radio' value="user" id='user' name='users' />
      <label for='user'>일반회원</label>
      <br/>
      <div>
        <input 
          type='text' 
          name='id' 
          placeholder='아이디' 
          value={id}
          onChange={handleIdChange}
          style={{padding: 15, width: 400, borderColor:'red', borderRadius: 5, borderStyle:'solid', outline:'none', marginTop:10, marginBottom:15}} 
          />
        <div className={isError ? 'message-error' : 'message-success'}>{message}</div>
      </div>
      <div>
        <input 
          type='password' 
          name='password' 
          placeholder='비밀번호' 
          style={{padding: 15, width: 400, borderColor:'red', borderRadius: 5, borderStyle:'solid', outline:'none',marginTop:10, marginBottom:15}} />
      </div>
      <button onClick={() => {}} style={{padding: 15, width: 435, fontSize: 18, fontWeight:'bold', color:'white', backgroundColor:'red', borderColor:'red', borderRadius: 5, borderStyle:'solid'}}>로그인</button>
    </div>
  )

}

