"use client"

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

    return (
    <main className="flex flex-col h-screen relative ">
        <Container>
            <NavBar />
            {/* === Welcome User and Content Section === */}
            <div className='flex-grow bg-[#131325]'>
                <div className='container bg-white mx-auto shadow-xl my-10 p-10 rounded-xl'>
                    <div className='flex justify-between'>
                        <div className="flex-col text-center">
                            <div className="flex items-center">
                                <h3 className="text-3xl mb-2">Profile</h3>
                                <div className="ml-1 text-[17.5px]"><CgProfile /></div>
                            </div>
                        <p className="mt-2">Welcome, {session.user?.name}</p>
                        <p className="mt-2">Email: {session.user?.email}</p>
                        <p className="mt-2">Role: {session.user?.role}</p>
                        </div>
                        <div>
                            <Link className='mr-2 px-3 py-2 font-semibold bg-[#217421] text-white rounded-lg hover:bg-[#79b479] hover:text-[#ffffff] transition shadow-lg hover:shadow-[0_0_10px_rgba(33, 116, 33, 1)]' 
                            href="/createContent">Create Content</Link>
                        </div>
                    </div>

                    {/* === User Posts Data === */}
                    <div>
                        <div className="shadow-2xl my-6 p-10 rounded-xl">
                            <h3 className="text-xl font-semibold  my-3 underline">Content Title</h3>
                            <div className="flex justify-evenly gap-8">
                                <Image src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?q=80&w=976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                width={200}
                                height={0}
                                alt="Content Image"/>
                                <p className="my-4">
                                "The night sky is a canvas of wonder, painted with stars that whisper ancient stories. As darkness falls, the cosmos awakens, offering a breathtaking view of constellations, planets, and the infinite universe. Take a moment to gaze upward and lose yourself in its timeless beauty. 
                                </p>
                            </div>
                            <div className='mt-5 '>
                                <Link className='mr-2 px-3 py-1 border-[2px] font-semibold border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition shadow-lg hover:shadow-[0_0_10px_rgba(59,130,246,0.8)]' 
                                    href="/editContent">Edit Content</Link>
                                <Link className='mr-2 px-3 py-1 border-[2px] font-semibold border-[#b32b2b] text-[#b32b2b] rounded-lg hover:bg-[#b32b2b] hover:text-white transition shadow-lg hover:shadow-[0_0_10px_rgbargba(179, 43, 43, 1)]' 
                                    href="/delete">Delete Content</Link>
                            </div>
                        </div>
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