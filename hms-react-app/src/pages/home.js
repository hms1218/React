import { useContext } from "react"
import { ThemeContext } from "../context/context";

export const Home = () => {

    const {theme} = useContext(ThemeContext);

    return(
        <div>
            <h2>Welcome to My React DashBoard</h2>
            <p>Current Theme : <strong>{theme}</strong></p>
        </div>
    )
}