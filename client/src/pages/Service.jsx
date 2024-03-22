import { useAuth } from "../store/auth"

export const Service = () =>{

    const {services} = useAuth();
    
        
    
    return(
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Projects</h1>
            </div>

            
            
            <div className="container grid grid-three-cols">

                {services.map((curElem , index)=>{
                    const {price , description  , service ,provider}= curElem;
                    return(
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src={provider} alt="projects" width="200" />
                            </div>
                            <div className="card-details">
                                <h2>{service}</h2>
                                <p>{description}</p>
                                <div className="grid grid-two-cols">
                                    <button className="third-btn"><a href={price} target="__blank">View</a></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>

            <div className="skills-bar">
                <img src="https://i.ibb.co/jhz3BBF/html5-logo-31813.png" alt="html" />
                <img src="https://i.ibb.co/DM5W076/css.png" alt="css" />
                <img src="https://i.ibb.co/1GLmZR6/bootstrap.png" alt="bootstrap" />
                <img src="https://i.ibb.co/sWz0yCd/javascript-39420.png" alt="javascript" />
                <img src="https://i.ibb.co/kG44f5V/pyton.png" alt="python" />
                <img src="https://i.ibb.co/LxJ2ZVp/react.png" alt="react" />
                <img src="https://i.ibb.co/yBCJc57/node.png" alt="node" />
                <img src="https://i.ibb.co/YphbCVm/express.png" alt="express" />
                <img src="https://i.ibb.co/KNRLJR2/logo-mysql-26353.png" alt="mysql" />
                <img src="https://i.ibb.co/jrvZ97G/Mongodb-PNG-Picture.png" alt="mongodb" />

            </div>

            <div className="noteone">
                <h4 className="note">Note : Credentials for Login To The Project Websites</h4>
                <h5 className="username">Username : Rahul</h5>
                <h5 className="password">Password : rahul@2021</h5>
            </div>


            
        </section>
    )
}