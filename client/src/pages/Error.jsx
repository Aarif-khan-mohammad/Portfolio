import { NavLink } from "react-router-dom"

export const Error = ()=>{
    return(
        <section id="error-page">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry! Page Not Found</h4>
                <p>
                    Oops! It seems like the page you're trying access doesn't exist.
                    If you believe there's an issue , feel free to report it , and I'll
                    look into it.
                </p>
                <div className="btns">
                    <NavLink to="/"> <button>Return Home</button></NavLink>
                    <NavLink to="/contact"><button>Report Problem</button></NavLink>
                </div>
            </div>
        </section>
    )
}