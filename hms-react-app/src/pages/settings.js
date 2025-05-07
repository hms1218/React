import { useContext } from "react"
import { ThemeContext } from "../context/context";

export const Settings = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div>
            <h1>Settings</h1>
            <p>Current Theme : <strong>{theme}</strong></p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}