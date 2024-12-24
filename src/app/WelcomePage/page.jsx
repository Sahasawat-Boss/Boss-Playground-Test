import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from 'next/link';
import Image from 'next/image'
import { CgProfile } from "react-icons/cg";

function WelcomePage() {
    return (
    <main className="flex flex-col h-screen relative ">
        <Container>
            <NavBar />
            {/* === Welcome User and Content Section === */}
            <div className='flex-grow bg-gray-800'>
                <div className='container bg-white mx-auto shadow-xl my-10 p-10 rounded-xl'>
                    <div className='flex justify-between'>
                        <div className="flex-col text-center">
                            <div className="flex items-center">
                                <h3 className="text-3xl mb-2">Profile</h3>
                                <div className="ml-1 text-[17.5px]"><CgProfile /></div>
                            </div>
                        <p className="mt-2">Welcome, Boss-Sahasawat</p>
                        </div>
                        <div>
                            <Link href="/createContent" className='bg-green-700 text-white text-lg px-3 pb-[8px] py-2 rounded-lg hover:bg-green-500'>Create Content</Link>
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
                                <Link className='bg-[#4848b9] hover:bg-blue-400 text-white border py-2 px-3 rounded-md text-lg my-2 mr-2' href="/editContent">Edit Content</Link>
                                <Link className='bg-[#b32b2b] hover:bg-red-400 text-white border py-2 px-3 rounded-md text-lg my-2' href="/delete">Delete Content</Link>
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