"use client"

import React, {useState, useEffect} from "react";
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from 'next/link';
import Image from 'next/image'
import { CgProfile } from "react-icons/cg";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function WelcomePage() {

    const {data: session} = useSession();
    if (!session) redirect("/signIn"); // If user is not signed in, redirect to signIn
    console.log(session);

    const [contentData, SetContentData] = useState([]);

    console.log(contentData);

    const userEmail = session?.user?.email;

    const getContents = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/contents?email=${userEmail}`, {
                cache: "no-store"
            });

            if (!res.ok) {
                throw new Error("Failed to fetch content");
            } 
            
            const data = await res.json();
            console.log(data);
            //SetContentData(data.contents);

        } catch(error) {
            console.log("Error loading contents", error)
            
        }
    }

    useEffect(() => {
        getContents();
    }, []);

    return (
    <main className="flex flex-col h-screen relative ">
        <Container>
            <NavBar />
            {/* === Welcome User, Profile === */}
            <div className='flex-grow bg-[#1d1d30]'>
                <h1 className=" my-8  mx-4 text-white text-3xl font-medium text-center animate-floating ">Welcome, {session.user?.name}</h1>
                <div className='bg-white w-fit mx-auto shadow-xl mb-10 p-4 px-8 rounded-xl'>
                    <div className='flex justify-center'>
                        <div className="flex-col items-start ">
                            <div className="flex items-center">
                                <h3 className="text-lg">Profile</h3>
                                <div className="ml-1 text-[17.5px]"><CgProfile /></div>
                            </div>
                            <hr className="my-1 border-t-2 border-gray-300 w-full" />
                            <p className="mt-2">User: {session.user?.name}</p>
                            <p>Email: {session.user?.email}</p>
                            <p>Role: {session.user?.role}</p>
                        </div>
                    </div>
                </div>
                {/* === Content Section === */}
                <div className='container bg-white mx-auto shadow-xl my-10 px-10 py-7 rounded-xl'>
                    <div className="my-5">
                        <Link className='mr-2 px-3 py-2 font-semibold bg-[#226922] text-white rounded-lg hover:bg-[#79b479] hover:text-[#ffffff] transition shadow-lg hover:shadow-[0_0_10px_rgba(33, 116, 33, 1)]' 
                        href="/createContent">Create Content</Link>
                    </div>
                    {/* === User Content Data API GET === */}
                    <div>
                        {contentData && contentData.length > 0?(
                            contentData.map(val => (
                                <div key={val._id} className="shadow-2xl my-0 p-10 rounded-xl">
                                    <h3 className="text-xl font-semibold  my-3 underline">{val.title}</h3>
                                    <div className="flex justify-evenly gap-8">
                                        <Image src={val.img}
                                        width={120}
                                        height={0}
                                        alt={val.title}/>
                                        <p className="my-4">
                                            {val.content} 
                                        </p>
                                    </div>
                                    <div className='mt-5 '>
                                        <Link className='mr-2 px-3 py-1 border-[2px] font-semibold border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition shadow-lg hover:shadow-[0_0_10px_rgba(59,130,246,0.8)]' 
                                            href={`/edit/${val._id}`}>Edit Content</Link>
                                        <Link className='mr-2 px-3 py-1 border-[2px] font-semibold border-[#b32b2b] text-[#b32b2b] rounded-lg hover:bg-[#b32b2b] hover:text-white transition shadow-lg hover:shadow-[0_0_10px_rgbargba(179, 43, 43, 1)]' 
                                            href={`/edit/${val._id}`}>Delete Content</Link>
                                    </div>
                                </div>
                            ))
                            
                        ):
                            <p className="bg-slate-200 font-bold p-4 my-3 text-center">
                                you do no have any posts yet.
                            </p>
                        }

                    </div>
                </div>
            </div>
            {/* === Welcome User and Content Section === */}
            <Footer />
        </Container>
    </main>
    )
}

export default WelcomePage