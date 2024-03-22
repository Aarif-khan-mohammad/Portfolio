import { Analytics } from "../components/Analytics"

export const Home = () =>{
    return (
        <>

        <main>
            <section className="section-hero">
                <div className="container gird grid-two-cols">
                    <div className="hero-content">
                        <p>Full Stack Developer</p>
                        <h1> Aarif Khan Mohammad</h1>
                        <p>
                        Recent B.Tech graduate from IIIT Srikakulam (2023) with 
                        expertise in Python, JavaScript, MySql and MongoDB.Proficient 
                        in web development technologies like HTML5, CSS3, Bootstrap, 
                        React.js, and Node.js.
                        </p>

                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">Connect Me</button></a>
                            <a href="/service"><button className="btn secondary-btn">Learn More</button></a>
                        </div>
                    </div>

                    {/* Hero image */}

                    <div className="hero-image">
                        <img src="/images/home.png" alt="home page image" width="500" height="500"/>
                    </div>


                </div>
            </section>
        </main>

        {/* 2nd Section */}
        <Analytics/>

        {/* 3rd section */}

        <section className="section-hero">
                <div className="container gird grid-two-cols">
                    
                    {/* Hero image */}

                    <div className="hero-image">
                        <img src="/images/design.png" alt="home page image" width="500" height="500"/>
                    </div>



                    <div className="hero-content">
                        <p>More About me</p>
                        <h1> Abilities </h1>
                        <p>
                        A quick learner with strong communication and time management 
                        skills, showcasing an academic foundation coupled with technical 
                        prowess. Ready to leverage this skill set to contribute effectively 
                        and drive innovation in a dynamic professional environment.
                        </p>

                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">Connect Me</button></a>
                            <a href="/service"><button className="btn secondary-btn">Learn More</button></a>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}