import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/context";

export const NavBar = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div className={`navbar ${theme}`}>
            <Link to="/src/pages/home.js">Home</Link>
            <Link to="/src/pages/posts.js">Posts</Link>
            <Link to="/src/pages/settings.js">Settings</Link>
        </div>
    )
}