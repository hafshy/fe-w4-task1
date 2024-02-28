import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function JobLandingPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("LOADED");
    }, []);

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         console.log("LOGIN");
    //         navigate("/");
    //     }
    // }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const header = { "Access-Control-Allow-Origin": "*" };
            const { data: response } = await axios.post(
                `https://teaching-careful-lioness.ngrok-free.app/api/v1/customer/login`,
                {
                    username: username,
                    password: password,
                },
                header
            );
            console.log(response);
            if (response.code == 200) {
                localStorage.setItem("isLogin", true);
                console.log("success bro");
                navigate("/");
            }
        } catch (error) {
            console.log("Failed to fetch user data");
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-cyan-light relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f1e32] z-0"></div>
            <main className="flex flex-col items-center px-6 relative z-10 min-h-screen justify-center">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 backdrop-blur-sm"
                    onSubmit={handleLogin}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={username}
                                placeholder="Username"
                                autoComplete="username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                value={password}
                                placeholder="******************"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="text-center text-white text-xs">
                    &copy;2024 Hafshy Yazid
                </p>
            </main>
            <img
                src="https://miro.medium.com/v2/resize:fit:1200/1*ZJBkfG3WN83TLlr7ESYrLA.jpeg" // Replace with your image path
                alt="Developer working on code"
                className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
        </div>
    );
}
