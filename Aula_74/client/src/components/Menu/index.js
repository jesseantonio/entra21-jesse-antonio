import "./styles.css";  
import { NavLink } from "react-router-dom";

export function Menu() {
    return (
        <div className="menu">
            <ul className="lista">
            <li className="texto-nav">
                <NavLink className="decor" exact to="/">Home</NavLink>
            </li>
            <li className="texto-nav">
                <NavLink className="decor" to="/login">Login</NavLink>
            </li>
            <li className="texto-nav">
                <NavLink className="decor" to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="texto-nav">
                <NavLink className="decor" to="/products/123">Products</NavLink>
            </li>
        </ul>
        </div>
    );
}