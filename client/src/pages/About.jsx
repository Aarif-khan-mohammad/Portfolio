import { Analytics } from "../components/Analytics"
import { useAuth } from "../store/auth"



export const About = () =>{

    const {user} = useAuth();



    return (
        <>
        <main>
            <section className="section-hero">
                <div className="container gird grid-two-cols">
                    <div className="hero-content">
                        
                        <p> Welcome , {user ? ` ${user.username} to our website` :` to About page`} </p>
                        <h1> About Me</h1>
                        <p>
                        Greetings! I'm Aarif Khan Mohammad, Graduating with distinction  
                        from P.R. Govt Boys High School in Kakinada City in 2017, I achieved  
                        an exceptional 9.8 GPA. </p>
                        <p>Continuing at IIIT Nuzvid, I excelled with  
                        a commendable 7.6 CGPA in 2019 and graduated with honors in 2023,  
                        securing an impressive 8.4 CGPA.</p>
                        <p>
                        My expertise spans frontend technologies like HTML5, CSS3, Bootstrap,  
                        and React JS</p> 
                        <p>In Backend proficiency includes Node JS and Express JS. </p>
                        <p>
                        I excel in database management with MySQL and MongoDB,  coupled with 
                        programming skills in Python.</p>
                        
                        

                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">Connect Me</button></a>
                            <a href="/service"><button className="btn secondary-btn">Learn More</button></a>
                        </div>
                    </div>

                    {/* Hero image */}

                    <div className="hero-image">
                        <img src="/images/about.png" alt="home page image" width="500" height="500" className="imgg"/>
                    </div>


                </div>
                
            </section>
        </main>
        <Analytics/>
        </>
    )
}