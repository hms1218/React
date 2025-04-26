const initialState = {
  name: '',
  isLoggedin: false
}

export const LoginReducer = (state = initialState, action) => {

  switch(action.type){
    case 'LOGIN':
      return{
        ...state,
        name: action.payload,
        isLoggedin: true
      }
    case 'LOGOUT':
      return{
        ...state,
        name:'',
        isLoggedin: false
      }
    default :
      return state
  }
}