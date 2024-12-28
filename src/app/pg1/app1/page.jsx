import NavBar from "../../Components/nav";
import Container from "../../Components/container";
import Footer from "../../Components/footer";
import Image from "next/image";
import Item1 from "./Components/item1";
import Item2 from "./Components/item2";

function app1() {

const item2Data = [
{ name: "Name1", surname: "Surname1", age: "15" }, // item2Data[0]
{ name: "Name2", surname: "Surname2", age: "71" }, // item2Data[1]
];

console.log("Item2 Data:", item2Data); // Output the item2Data array to the console

return (
    <main className="flex flex-col h-screen relative ">
        <Container>
        <NavBar />
        <main className="flex-grow bg-[#1d1d30] text-white">
            <h1 className="text-3xl text-center mt-8 font-semibold animate-floating">
            Learning Code
            </h1>
            <div className="flex justify-center">
            <Image
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHo2aWw4MXltNTBtdGx3YnUwZXE2MjR3MXJ4dzVkenBsb3l1ajBobSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YnS7j9pwnECXLMrI4t/giphy.webp"
                alt="Gif1" width={220} height={0} className="animate-fade-in-up" />
            </div>

            {/* Section: Variable Prop Component */}
            <section className="w-fit mx-auto shadow-lg shadow-[#5a91b6] mb-3 p-2">
                <h2 className="text-xl mx-8 my-2 font-semibold ">Prop</h2>
                <Item1 />

                {/* Pass the item2Data array values to the Item2 component */}
                <div className="text-green-300">
                    <Item2 name={item2Data[0].name} surname={item2Data[0].surname} age={item2Data[0].age}/>
                    <Item2 name={item2Data[1].name} surname={item2Data[1].surname} age={item2Data[1].age}/>
                </div>
            </section>
            {/* Section: Variable Prop Component */}
            {/* Section: Component Logic*/}
            <section className="w-fit mx-auto">
                Next Section
            </section>
            {/* Section: Component Logic */}
        </main>
        <Footer />
        </Container>
    </main>
);
}

export default app1;
