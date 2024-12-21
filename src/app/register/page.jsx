import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from 'next/link';

function SignUp() {
  return (
    <Container>
      <NavBar/>
      <div className="hero flex-grow bg-base-200 pb-12">
        <div className="hero-content flex-col gap-x-10 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="pt-6 px-36">Join Boss Playground to unlock a world of creativity, collaboration, and innovation!</p>
            <p className="pb-6 px-36"> Create your account in just a few steps and start your journey with us!</p>
          </div>
          <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
            <form className="card-body pt-4">
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
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-green-600" type='submit'>Sign In</button>
              </div>
              <p>Already have an account?
                <Link href="/signIn" className='text-blue-500 hover:underline'>Sign In</Link>
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
