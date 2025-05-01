import login_logo from '../logIn/login_logo.jpg'

export const Login = () => {

  return(
    <div style={{textAlign: 'center'}}>
      <img src={login_logo} alt="no" width={100} height={100} />
      <br/>
      <span>※회원구분을 위해 체크해 주세요</span>
    </div>
  )

}