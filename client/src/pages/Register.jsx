import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () =>{

    const [user , setUser ] = useState({
        username : "",
        email :"",
        phone :"",
        password :"",
    });

    const navigate = useNavigate();
    const {storeTokenLS} = useAuth();

    //handlingInput Input Values

    const handleInput = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        setUser({
            ...user,
            [name] : value,
        })
    }

    //handling the submission

    const handleSubmit = async ( event)=>{
        event.preventDefault();

        try {
            const response = await fetch(`http://127.0.0.1:5000/api/auth/register` , 
            {
                method :"POST" , 
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(user)
            });

            const response_data = await response.json();// registration related data like JWT Token
            console.log("response data" , response_data.extraDetails)

            if(response.ok){
                storeTokenLS(response_data.token);// Accessing JWT Token

                setUser({
                    username : "",
                    email :"",
                    phone :"",
                    password :"",
                });

                navigate("/login");
            }else{
                alert(response_data.extraDetails ? response_data.extraDetails : response_data.message)
            }


        } catch (error) {
            console.log("register" , error);
            
        }
        
    };


    return (
    <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">

                    <div className="registration-image">
                        <img src="/images/register.png" alt="a girl is trying to registration" width="500" height="500"/>
                    </div>

                    {/*registration form*/}

                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registration Form</h1>
                        <br/>

                        <form onSubmit={handleSubmit}>


                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" placeholder="Enter Your Name" id="username" value={user.username} onChange={handleInput} required autoComplete="off"/>
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="Enter Your Email" id="email" value={user.email} onChange={handleInput}  required autoComplete="off"/>
                            </div>

                            <div>
                                <label htmlFor="phone">phone</label>
                                <input type="phone" name="phone" placeholder="Enter Your Phone Number" id="phone" value={user.phone} onChange={handleInput}  required autoComplete="off"/>
                            </div>

                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" name="password" placeholder="Enter Your password" id="password" required value={user.password} onChange={handleInput}  autoComplete="off"/>
                            </div>
                            
                            <br/>

                            <button type="submit" className="btn btn-submit" >Register Now</button>

                        </form>

                    </div>

                </div>
            </div>
        </main>
    </section>
    </>);
}