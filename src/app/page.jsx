import Image from "next/image";
import NavBar from "../app/Components/nav";
import UserTable from "../app/Components/userTable";


export default function Home() {
  return (
    <main>
      {/* ===NAV===*/}
      <NavBar/>
      {/* ===NAV===*/}
      

      {/* ===Top Content===*/}
      <section className="flex justify-center items-center my-6">
        
        <div className="w-32">
          <img src="https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif" alt="React Logo" />
        </div>

        <div className="w-20 mr-10">
          <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next Logo" />
        </div>

        <div>
          <div className="bg-white max-w-md dark:bg-gray-800 px-8 py-7 rounded-lg shadow-md dark:shadow-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-600 transform hover:scale-105">
              <p  className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                "This is my play ground for testing Next.js and React"
              </p>
              <p  className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                -- Test Deploy --
              </p>
              <div  className="mt-2">
                <div  className="flex items-center">
                  <svg aria-hidden="true"  className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>First star</title>
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
                  <svg aria-hidden="true"  className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Second star</title>
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
                  <svg aria-hidden="true"  className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
                  <svg aria-hidden="true"  className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Fourth star</title>
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
                  <svg aria-hidden="true"  className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Fifth star</title>
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">5.0</span>
                </div>
              </div>
            </div>
        </div>

      </section>
      {/* ===Top Content===*/}
      
      {/* === Content1 ===*/}
      <section className="w-screen pb-16 h-auto bg-gray-200">
        <div className="px-16 py-6 text-lg font-bold ">Section for Test Calling API to Table </div>

        <div name="Table API Section">
          <UserTable/>
        </div>


        </section>
      {/* === Content1 ===*/}
      
      

    </main>
  );
}
