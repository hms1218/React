import { useContext } from "react"
import { ThemeContext } from "../context/context";

export const Home = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div>
            <h2>Welcome to My React DashBoard</h2>
            <p>Current Theme : {theme}</p>
        </div>
    )
}