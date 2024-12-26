"use client"

import { signOut } from "next-auth/react"

function NavBar() {
return (
    <div className="navbar bg-[#1d1d1d] text-white shadow-[0_4px_15px_rgba(250,0,0,0.4)] top-0 z-50">
        <div className="flex-1">
            <a href='/' className="btn btn-ghost text-xl">Boss PlayGround</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-2">
                <li><a href='/signIn'>Sign In</a></li>
                <li><a href='/signUp'>Sign Up</a></li>
                <li><a onClick={() => signOut()} className="bg-red-500 rounded-md">Sign Out</a></li>
                <li>
                    <details>
                    <summary>Other</summary>
                        <ul className="bg-base-100 rounded-t-none p-2 text-black">
                            <li><a>Link 1</a></li>
                            <li><a>Link 2</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
)
}

export default NavBar