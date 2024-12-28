import NavBar from "../Components/nav"
import Container from "../Components/container"
import Footer from "../Components/footer"
import Image from 'next/image'
import Item1 from "./Components/item1"

function playGround1() {
return (
    <main className="flex flex-col h-screen relative ">
        <Container>
        <NavBar />
        <main className='flex-grow bg-[#1d1d30] text-white'>
            <h1 className="text-3xl text-center mt-8 font-semibold">Play Ground 1</h1>
            <div className="flex justify-center mt-4">     
                <Image
                    src="https://static.vecteezy.com/system/resources/thumbnails/011/153/365/small/3d-web-developer-working-on-project-illustration-png.png"
                    alt="Gif1"
                    width={200}
                    height={100}
                    className="animate-floating"/>      
            </div>
            <Item1/>
        </main>
        <Footer />
        </Container>
    </main>


)}

export default playGround1