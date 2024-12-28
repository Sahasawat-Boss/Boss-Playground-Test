"use client"

import { useState } from "react";
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from 'next/link';
import { useSession } from "next-auth/react";
import {redirect} from 'next/navigation'
import {useRouter} from 'next/navigation'

function createContent() {

  const {data: session} = useSession();
  if (!session) redirect("/signIn"); // If user is not signed in, redirect to signIn

  const userEmail = session?.user?.email;

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent ] = useState("");

  const router = useRouter();

  console.log(title,img,content);

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if (!title || !img || !content ) {
      console.log("Some fields are empty!");
      alert("Some fields are empty!")
      return;
    }

    try {

      const res = await fetch("http://localhost:3000/api/content",{
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ title,img,content,userEmail }),
      });
      
      if (res.ok) {
        router.push("/WelcomePage");
      } else {
        throw new Error("Failed to create content");
      } 


    } catch (error) {
      console.log(error);
      
    }

  }



  return (
    <Container>
      <NavBar session={session} />
      <div className="flex-grow bg-[#131325]">
        <Link href="/WelcomePage" className='bg-blue-700 inline-block text-white py-2 px-3 rounded mt-10 ml-10 hover:bg-blue-400'>
          Go back
        </Link>
        <div className='container bg-white w-[400px] mx-auto shadow-xl my-10 p-6 rounded-xl'>
          <div className="flex flex-col items-center justify-center">            
            <h3 className='text-xl font-bold my-1'>Create Content</h3>

            {/*Form Create Content*/}
            <form onSubmit={handleSubmit}>
              <input 
                onChange={(e)=>setTitle(e.target.value)}
                type="text" 
                className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
                placeholder='Content Title' 
              />
              <input 
                onChange={(e)=>setImg(e.target.value)}
                type="text" 
                className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
                placeholder='Content Img (url)' 
              />
              <textarea 
                onChange={(e)=>setContent(e.target.value)}
                className='w-[300px] h-[200px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder='Enter Content Details'>
              </textarea>

              {/* Centering the button */}
              <div className="flex justify-center w-full">
                <button 
                  type='submit' 
                  name='create' 
                  className='bg-green-800 text-white border py-2 px-3 rounded-lg text-lg my-2 hover:bg-green-600'>
                  Create Content
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* === Create Post Section === */}
      <Footer />
    </Container>
  );
}

export default createContent;
