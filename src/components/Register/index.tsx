import React, {useState} from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    return (
        <div className="w-full h-[89.8vh] flex justify-center items-center">
            <div className="container mx-auto w-96 h-96 flex flex-col justify-center items-center bg-[rgb(243,244,246)]">
                <form action="/register" method="post">
                    <h1 className="text-3xl my-4">Register</h1>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" name="email" className="border border-black border-solid rounded px-2 w-40" />
                    <label htmlFor="name">Name</label>
                    <input type="name" id="name" name="name" className="border border-black border-solid rounded px-2 w-40" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" className="border border-black border-solid rounded px-2 w-40" />
                    <input type="submit" value="Submit" className="my-4 px-8 py-2 rounded-md text-lg bg-green-800 mx-auto hover:opacity-90 duration-200" />
                    <p>Already have an account? <Link to="/login" className="text-blue-800">Login</Link></p>
                </form>

            </div>
        </div>
    )
};

export default Register;