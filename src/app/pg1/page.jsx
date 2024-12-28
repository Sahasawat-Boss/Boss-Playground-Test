import NavBar from "../Components/nav";
import Container from "../Components/container";
import Footer from "../Components/footer";
import Link from "next/link";

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

const Page = () => {

return (
    <main className="flex flex-col h-screen relative">
        <Container>
        <NavBar/>
        {/* Card Nav Section*/}
        <div className="this p-10 h-screen bg-[#1d1d30] flex flex-col items-center ">
            <h1 className="text-3xl text-center text-white mt-8 font-semibold animate-floating">
                PlayGround 1
            </h1>
            <img className="my-4" src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b9520xrtc3u0zk574kj6fokty3nmbx7xhaj966m9hskt&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="React Gif" height={0} width={50} /> 
            {cardsNav.map((cardsNav, index) => (
                <Link key={index} href={cardsNav.link}>
                    <div className="text-center max-w-sm w-96 p-4 my-3 rounded-lg shadow-md bg-white cursor-pointer hover:shadow-white hover:shadow-sd transition hover:scale-105 animate-fade-in-up">
                        <h2 className="text-xl font-bold mb-2">{cardsNav.title}</h2>
                        <p className="text-gray-600">{cardsNav.description}</p>
                    </div>
                </Link>
            ))}
        </div>
        {/* Card Nav Section */}
        <Footer/>
        </Container>
    </main>
    );
};

export default Page;
