import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/context";
import '../index.css'

export const NavBar = () => {

    const {theme} = useContext(ThemeContext);

    return(
        <div className={`navbar ${theme}`}>
            <Link to="/src/pages/home.js">Home</Link>
            <Link to="/src/pages/posts.js">Posts</Link>
            <Link to="/src/pages/settings.js">Settings</Link>
        </div>
    )
}