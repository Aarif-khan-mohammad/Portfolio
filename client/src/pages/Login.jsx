import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Login = () =>{

    const navigate = useNavigate();
    const {storeTokenLS} = useAuth();

    const [login , setLogin ] = useState({
        email :"",
        password :"",
    });

    //handlingInput Input Values

    const handleInput = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        setLogin({
            ...login,
            [name] : value,
        })
    }

    //handling the submission

    const handleSubmit = async ( event)=>{
        event.preventDefault();

        try {
            const response = await fetch(`http://127.0.0.1:5000/api/auth/login` , {
                method :"POST" , 
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(login)
            });

            console.log("login form" , response);
            const response_data = await response.json();// registration related data like JWT Token

            if(response.ok){
                alert("LogIn Successful");

                
                console.log("response data" , response_data)

                storeTokenLS(response_data.token);


                setLogin({
                    email :"",
                    password :"",
                }); //after successfully log in , the input fields should be empty
                navigate("/");
            }else{
                alert(response_data.extraDetails ? response_data.extraDetails : response_data.message)
                console.log("Invalid Credentials")
            }


        } catch (error) {
            console.log("login" , error);
            
        }

        
        
    }


    return (
    <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">

                    <div className="registration-image">
                        <img src="/images/login.png" alt="let's fill login form" width="500" height="500"/>
                    </div>

                    {/*registration form*/}

                    <div className="registration-form">
                        <h1 className="main-heading mb-3">LogIn Form</h1>
                        <br/>

                        <form onSubmit={handleSubmit}>


                            

                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="Enter Your Email" id="email" value={login.email} onChange={handleInput}  required autoComplete="off"/>
                            </div>

                            
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" name="password" placeholder="Enter Your password" id="password" required value={login.password} onChange={handleInput}  autoComplete="off"/>
                            </div>
                            
                            <br/>

                            <button type="submit" className="btn btn-submit" >LogIn</button>

                        </form>

                    </div>

                </div>
            </div>
        </main>
    </section>
    </>);
}