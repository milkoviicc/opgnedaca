import React, {useState} from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e: any) {
        e.prevent.default();

        try {
            await axios.post("http://localhost:5173", {
                email,password
            })
            .then(res => {
                if(res.data=="exist") {
                    history("/home"), {state:{id:email}};
                } else if(res.data=="doesn't exist") {
                    alert("User doesn't exist");
                }
            })
            .catch(e=> {
                alert("wrong details")
                console.log(e);
            })
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="w-full h-[89.8vh] flex justify-center items-center">
            <div className="container mx-auto w-96 h-96 flex flex-col justify-center items-center bg-[rgb(243,244,246)]">
                <form action="post">
                    <h1 className="text-3xl my-4">Login</h1>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}} className="border border-black border-solid rounded px-2 w-40" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}} className="border border-black border-solid rounded px-2 w-40" />
                    <input type="submit" value="Submit" onClick={submit} className="my-4 px-8 py-2 rounded-md text-lg bg-green-800 mx-auto hover:opacity-90 duration-200" />
                    <p>Don't have na account? <Link to="/register" className="text-blue-800">Register now</Link></p>
                </form>
            </div>
        </div>
    )
};

export default Login;