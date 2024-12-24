import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from 'next/link';

function SignUp() {
  return (
    <Container>
      <NavBar/>
      <div 
        className="hero flex-grow relative bg-cover bg-center pb-12"
        style={{ 
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
        }}
      >
        {/* Black overlay with 60% opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        
        {/* Hero Content */}
        <div className="hero-content flex-col gap-x-10 lg:flex-row-reverse">
          <div className="text-center text-white lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="pt-6 px-48">Join Boss Playground to unlock a world of creativity, collaboration, and innovation!</p>
            <p className="pb-6 px-48"> Create your account in just a few steps and start your journey with us!</p>
          </div>
          <div className="card w-[380px] shrink-0 bg-base-100 shadow-2xl">
            <form className="card-body pt-4 pb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="email" placeholder="Plese input your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Plese input your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Plese input your password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="Plese re-input your name" className="input input-bordered" required />
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary px-16 py-3 text-white text-xl font-semibold bg-black shadow-md shadow-red-300 rounded-lg hover:bg-[#585858] hover:text-white hover:shadow-sky-500"  type='submit'>Sign Up</button>
              </div>
              <p className="mt-3">Already have an account?
                <Link href="/signIn" className='text-blue-500 hover:underline ml-1 '>Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  )
}

export default SignUp
