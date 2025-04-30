//context api
//데이터를 전역적으로 사용할 수 있게 해주는 기능
//제공할 때는 Provider에 넣으면 된다.
//사용할 때는 useContext 훅을 사용하면 된다.

import { createContext } from "react"

//1. context 객체 생성하기
const Mycontext = createContext();

export const MyProvider = ({children}) => {
    const [value, setValue] = useState("Hello, React");
    
    return(
        <Mycontext.Provider value={{value,setValue}}>
            {children}
        </Mycontext.Provider>
    )
}