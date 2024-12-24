import Image from "next/image";
import Container from "../app/Components/container";
import NavBar from "../app/Components/nav";
import Footer from "../app/Components/footer";


export default function FirstPage() {
  return (
    <main className="flex flex-col h-screen relative">
      <Container>
        <NavBar />
        <div
          className="relative flex items-center justify-center flex-grow p-10"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661964187664-e26f70e1a224?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover", backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black" style={{
              zIndex: 0,
              opacity: 0.6, // Ensure the overlay is behind the content
            }}
          ></div>

          {/* Content */}
          <div className="flex-col justify-center items-center text-center z-10 text-white">
            <h3 className="text-6xl mb-12 font-bold">Boss PlayGround</h3>
            {/* ===Top Content=== */}
            <p className="pt-6 pb-6  px-36 text-xl ">Welcome to Boss Playground!</p>
            <p className="px-36 text-xl mb-12">Sign in to access your personalized dashboard, explore exclusive features, and take your experience to the next level.</p>
            <a
              className="px-16 py-3 text-black text-xl font-semibold bg-white shadow-lg shadow-red-500 rounded-lg hover:bg-black hover:text-white hover:shadow-sky-500"
              href="/signIn">
              Get Start Now
            </a>
          </div>
        </div>
        <Footer />
      </Container>
    </main>
  );
}
