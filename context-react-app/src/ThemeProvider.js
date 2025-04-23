import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState(true);

    return(
        <ThemeContext.Provider value={{isDarkMode,setIsDarkMode}} >
            {children}
        </ThemeContext.Provider>
    )

}


//1. ThemeContext를 생성하여, 전역적으로 다크모드 상태를 관리
//2. ThemeProvider 컴포넌트에서 테마 상태를 관리하고 이를 하위 컴포턴트에 제공하세요.
//3. ThemeSwitcher 컴포넌트를 만들고, 사용자가 다크모드와 라이트모드를 전환할 수 있게 만드세요.
//4. App.js에서 스타일에 따라 상태 변환하기


// style={{
//     backgroundColor: isDarkMode ? '#333' : '#fff',
//     color: isDarkMode ? '#fff' : '#000',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}