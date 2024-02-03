import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username: data.username,
            email: data.email,
            password: data.password
        };
        axios.post("https://foodapp-api-nine.vercel.app/createaccount", userData).then((response) => {
            let key = (response.data);
            key = key.split(' ')[0];
            let token = (response.data);
            token = token.split(' ')[1];
            if (key == "1") {
                localStorage.setItem("client", JSON.stringify(userData.username));
                localStorage.setItem("token", JSON.stringify(token));
                navigate('/home');
            }
            else {
                navigate('/createaccount');
            }

        });
    };


    return (
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
                rel="stylesheet"
            />

            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form onSubmit={handleSubmit} className='formofloginpage-class'>
                <h3>Create account</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" id="username" name="username" onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" id="email" name="email" onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" name="password" onChange={handleChange} />
                <button type='submit' className='loginbutton-class mt-4 rounded'>Log In</button>

                {/* social login  */}
                {/* <div className="social">
                        <div className="go">
                            <i className="fab fa-google" /> Google
                        </div>
                        <div className="fb">
                            <i className="fab fa-facebook" /> Facebook
                        </div>
                    </div> */}
            </form>
        </>
    )
}

export default Signup
