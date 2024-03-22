import { useState } from "react";
import { useAuth } from "../store/auth";


export const Contact = () =>{

    const [contact , setContact ] = useState({
        username : "",
        email :"",
        message :"",
    });
    // getting data from user , for displaying on input fields username and email
    const [userData , setUserData] = useState(true);



    const {user} = useAuth();
    const {storeTokenLS} = useAuth();

    if(userData && user){
        setContact({
            username: user.username,
            email : user.email,
            message:"",
        })
        setUserData(false);
    }

    //handlingInput Input Values

    const handleInput = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        setContact({
            ...contact,
            [name] : value,
        })
    }

    //handling the submission

    const handleSubmit = async ( event)=>{
        event.preventDefault();

        try {


            const response = await fetch(`http://127.0.0.1:5000/api/form/contact` , {
                method :"POST" , 
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(contact)
            });

            if(response.ok){

                const response_data = await response.json();// registration related data like JWT Token
                console.log("response data from contact" , response_data)
                alert("Message sent successfully");

                storeTokenLS(response_data.token);// Accessing JWT Token

                setContact({
                    username : "",
                    email :"",
                    message :""
                });

                
            }
            
            console.log(response)



        } catch (error) {
            console.log("register" , error);
        }
        
    }


    return (
    <>
    <section>
        <main>
            <div className="section-contact">

                <div className="contact-content container">
                    <h1 className="main-heading">Contact Form</h1>
                </div>

                {/* contact main page */}

                <div className="container grid grid-two-cols">
                    <div className="contact-image">
                        <img src="/images/support.png" alt="we are always ready to help" width="500" height="500"/>
                    </div>

                    {/*contact form*/}

                    <section className="section-form">

                        <form onSubmit={handleSubmit}>


                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" placeholder="Enter Your Name" id="username" value={contact.username} onChange={handleInput} required autoComplete="off"/>
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="Enter Your Email" id="email" value={contact.email} onChange={handleInput}  required autoComplete="off"/>
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea type="text" name="message" cols="30" rows="6" placeholder="Enter Your Message" id="message" value={contact.message} onChange={handleInput}  required autoComplete="off"/>
                            </div>

                            
                            
                            <div>
                                <button type="submit" className="btn btn-submit" > Submit </button>
                            </div>

                        </form>

                    </section>


                </div>

                <section className="mb-3">
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30437.663717286607!2d78.37617775!3d17.521448700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8dff28839e11%3A0x30e1ac4d7d83c8af!2sNizampet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1706804622619!5m2!1sen!2sin" width="100%" height="450" 
                     allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </section>

                
            </div>
        </main>
    </section>
    </>);
}