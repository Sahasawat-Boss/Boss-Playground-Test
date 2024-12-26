"use client"

import React, { useState } from "react";
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from "next/link";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <Container>
      <NavBar />
      <div 
        className="hero flex-grow relative bg-cover bg-center pb-12"
        style={{ 
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
        }}
      >
        {/* Black overlay with 60% opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        
        {/* Hero Content */}
        <div className="hero-content flex-col gap-x-10 lg:flex-row-reverse relative">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Sign In</h1>
            <p className="py-6 px-48">
              "Welcome back to Boss Playground! Sign in to access your personalized dashboard, 
              explore exclusive features, and take your experience to the next level."
            </p>
          </div>
          <div className="card w-[380px] shrink-0 bg-base-100 shadow-2xl">
            <form className="card-body pt-4 pb-4">
              <div className="form-control">
              
              {error && (
                <div className="flex justify-center">
                  <div className="bg-red-500 w-fit text-white text-sm px-2 py-1 rounded-md">{error}</div>
                </div>
              )}

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  placeholder="email" 
                  className="input input-bordered" 
                  required 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                  type="password" 
                  placeholder="password" 
                  className="input input-bordered" 
                  required 
                />
                <label className="label">
                  <a href="#" className="link-hover link label-text-alt">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-1">
                <button 
                  className="btn btn-primary px-16 py-3 text-white text-xl font-semibold bg-black shadow-md shadow-red-300 rounded-lg hover:bg-[#585858] hover:text-white hover:shadow-sky-500" 
                  type='submit'>
                  Sign In
                </button>
              </div>
              <p className="mt-3">
                Don't have an account?
                <Link href="/signUp" className='text-blue-500 mt- hover:underline ml-1'>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default SignIn;
