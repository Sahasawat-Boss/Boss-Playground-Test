import Image from "next/image";
import Container from "../app/Components/container";
import NavBar from "../app/Components/nav";
import Footer from "../app/Components/footer";


export default function FirstPage() {
  return (
    <main className="flex flex-col h-screen">
      <Container>
        <NavBar />
        <div className="flex items-center justify-center flex-grow p-10">
          <div className="text-center">
            <h3 className="text-5xl mb-12 font-bold">Boss PlayGround</h3>
              {/* ===Top Content===*/}

              <div className="flex justify-center mt-5 mb-10 gap-3">
                <div className="w-32">
                  <img className="rounded-full" src="https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif" alt="React Logo" />
                </div>
                <div className="w-36 mt-1">
                  <img src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png" alt="Next Logo" />
                </div>
              </div>
            <a className=" px-10 py-4 text-white text-lg bg-green-600 shadow-lg rounded-lg hover:bg-green-500" href="/signIn">Get Start Now</a>
          </div>
        </div>
        <Footer />
      </Container>
    </main>

  );
}
