import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const ThemeSwitcher = () => {

    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);

    return(
        <div style={{
            backgroundColor: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h2> {isDarkMode ? '다크모드' : '라이트모드'} </h2>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>{!isDarkMode ? '다크모드 전환 버튼' : '라이트모드 전환 버튼'}</button>
        </div>
    )

}