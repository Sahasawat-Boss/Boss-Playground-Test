<<<<<<< HEAD
import NavBar from "../Components/nav";
import Container from "../Components/container";
import Footer from "../Components/footer";
import Link from "next/link";
import Image from "next/image"; // Import Image for Next.js

// Define the card data
const cardsNav = [
    {
        title: "Learning Code",
        description: "Space for exploring new code and discovering new functions and creativity.",
        link: "/pg1/app1",
    },
    {
        title: "In progress..",
        description: "In progress..",
        link: "/pg1/page2",
    },
    {
        title: "In progress..",
        description: "In progress..",
        link: "/pg1/page3",
    },
];

// Dummy data for item2Data
const item2Data = [
    { name: "John", surname: "Doe", age: 25 },
    { name: "Jane", surname: "Smith", age: 30 },
];

// Dummy component for Item1
const Item1 = () => <p>This is Item1 Component.</p>;

// Dummy component for Item2
const Item2 = ({ name, surname, age }) => (
    <div>
        <p>
            {name} {surname}, Age: {age}
        </p>
    </div>
);

const Page = () => {
    return (
        <main className="flex flex-col h-screen relative">
            <Container>
                <NavBar />
                {/* Card Nav Section */}
                <div className="this p-10 h-screen bg-[#1d1d30] flex flex-col items-center">
                    <h1 className="text-3xl text-center text-white mt-8 font-semibold animate-floating">
                        PlayGround 1
                    </h1>
                    <img
                        className="my-4"
                        src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b9520xrtc3u0zk574kj6fokty3nmbx7xhaj966m9hskt&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                        alt="React Gif"
                        height={0}
                        width={50}
                    />
                    {cardsNav.map((card, index) => (
                        <Link key={index} href={card.link}>
                            <div className="text-center max-w-sm w-96 p-4 my-3 rounded-lg shadow-md bg-white cursor-pointer hover:shadow-white hover:shadow-sd transition hover:scale-105 animate-fade-in-up">
                                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                                <p className="text-gray-600">{card.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* Card Nav Section */}
                <Footer />
                <div className="flex justify-center mt-4">
                    <Image
                        src="https://static.vecteezy.com/system/resources/thumbnails/011/153/365/small/3d-web-developer-working-on-project-illustration-png.png"
                        alt="Gif1"
                        width={200}
                        height={100}
                        className="animate-floating"
                    />
                </div>

                {/* Section: Variable Prop Component */}
                <section className="w-fit mx-auto shadow-lg shadow-[#5a91b6] mb-3 p-2">
                    <h2 className="text-xl mx-8 my-2 font-semibold">Prop</h2>
                    <Item1 />

                    {/* Pass the item2Data array values to the Item2 component */}
                    <div className="text-green-300">
                        {item2Data.map((item, index) => (
                            <Item2
                                key={index}
                                name={item.name}
                                surname={item.surname}
                                age={item.age}
                            />
                        ))}
                    </div>
                </section>
                {/* Section: Variable Prop Component */}

                {/* Section: Component Logic */}
                <section className="w-fit mx-auto">
                    <h2>Next Section</h2>
                </section>
                {/* Section: Component Logic */}
            </Container>
            <Footer />
        </main>
    );
};

export default Page;
=======
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
>>>>>>> parent of c9b6023 (c2)
