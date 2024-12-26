"use client"

import React, { useState } from "react";
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {data: session} = useSession();
  if (session) redirect("/welcomePage"); // If user is already signed in, redirect to welcomePage

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Name:", name); //Check if the input is captured
    console.log("Email:", email); //Check if the input is captured
    console.log("Password:", password); //Check if the input is captured
    console.log("Confirm Password:", confirmPassword); //Check if the input is captured
  
    if (password !== confirmPassword) {
      console.log("Passwords do not match!");
      setError("Password and Confirm Password do not match!");
      return;
    }
  
    if (!name || !email || !password || !confirmPassword) {
      console.log("Some fields are empty!");
      setError("Please fill in all inputs!");
      return;
    }

    try {

      const resUserExists = await fetch("http://localhost:3000/api/userExists",{
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ email }),
      });

      const {user} = await resUserExists.json();

      if (user){
        setError("This email already exists!");
        return;
      }


      const res = await fetch("http://localhost:3000/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password}),
      });

      if (res.ok) {
        const form = e.target; // Get the form element
        setError(""); // Clear any previous error
        setSuccess("Sign up successfully, please sign in"); 
        form.reset(); // Reset the form
      } else {
        console.log("Registeration failed!");
      } 

    } catch (error) {
      console.log("Error during sign up process: ", error);
      
    }
  }

  return (
    <Container>
      <NavBar/>
      <div 
        className="hero flex-grow relative bg-cover bg-center pb-12"
        style={{ 
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
        }}
      >
        {/* Black overlay with 60% opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        
        {/* Hero Content */}
        <div className="hero-content flex-col gap-x-10 lg:flex-row-reverse">
          <div className="text-center text-white mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="pt-6">Join Boss Playground to unlock a world of creativity, collaboration, and innovation!</p>
            <p className="pb-6">Create your account in just a few steps and start your journey with us!</p>
          </div>

          <div className="card w-[380px] shrink-0 bg-base-100 shadow-2xl">
            {/*Form SignUp*/}
            <form onSubmit={handleSubmit} className="card-body pt-4 pb-4">

              {error && (
                <div className="flex justify-center">
                  <div className="bg-red-500 w-fit text-white text-sm px-2 py-1 rounded-md">{error}</div>
                </div>
              )}

              {success && (
                <div className="flex justify-center">
                  <div className="bg-green-600 w-fit text-white text-sm px-2 py-1 rounded-md">{success}</div>
                </div>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Plese input your name" 
                className="input input-bordered focus:border-blue-500 focus:ring-2 focus:ring-blue-400"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Plese input your email" 
                className="input input-bordered focus:border-blue-500 focus:ring-2 focus:ring-blue-400"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Plese input your password" 
                className="input input-bordered focus:border-blue-500 focus:ring-2 focus:ring-blue-400"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Plese re-input your name" 
                className="input input-bordered focus:border-blue-500 focus:ring-2 focus:ring-blue-400"/>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary px-16 py-3 text-white text-xl font-semibold bg-black shadow-md shadow-red-300 rounded-lg hover:bg-[#585858] hover:text-white hover:shadow-sky-500"  type='submit'>Sign Up</button>
              </div>
              <p className="mt-3">Already have an account?
                <Link href="/signIn" className='text-blue-500 hover:underline ml-1 '>Sign In</Link>
              </p>
            </form>
            {/*Form SignUp*/}
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  )
}

export default SignUp
