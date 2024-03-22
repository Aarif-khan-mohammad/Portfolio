import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = ()=>{
    const {isLoggedIn} = useAuth();


    return(
        <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/"> <img src="https://i.ibb.co/G7c1VcV/ar-high-resolution-logo-transparent.png" alt="logo" className="logo"/> </NavLink>
                </div>

                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Projects</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        {isLoggedIn ? (<li><NavLink to="/logout">LogOut</NavLink></li> ):
                        (
                            <>
                            <li><NavLink to="/register">Register</NavLink></li>
                             <li><NavLink to="/login">LogIn</NavLink></li>
                            </>
                        )
                       }
                        
                    </ul>
                </nav>
            </div>
            
        </header>
        </>
    );
}
