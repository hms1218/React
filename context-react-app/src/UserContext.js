import { createContext, useState } from "react";

//1. 새로운 Context 생성하기
export const UserContext = createContext();

//사용자 정보를 관리하고 하위 컴포넌트에 데이터를 제공하기 위한 UserProvider컴포넌트
export const UserProvider = ({children}) => {

    const [user,setUser] = useState({name:'John Doe', age: 30});

    return(
        //Provider : Context에서 제공하는 특수한 컴포넌트
        //Value에 전달하고 싶은 데이터를 적는다.

        //JSX태그 사이에 넣은 내용은 props.children 으로 전달된다.
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}