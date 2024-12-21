import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from "next/link";

function SignIn() {
  return (
    <Container>
      <NavBar/>
      <div className="hero flex-grow bg-base-200 pb-12">
        <div className="hero-content flex-col gap-x-10 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In</h1>
            <p className="py-6 px-36">"Welcome back to Boss Playground! Sign in to access your personalized dashboard, explore exclusive features, and take your experience to the next level."</p>
          </div>
          <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
            <form className="card-body pt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="link-hover link label-text-alt">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-green-600" type='submit'>Sign In</button>
              </div>
              <p>Don't have an account?
                <Link href="/register" className='text-blue-500 hover:underline'>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  )
}

export default SignIn
