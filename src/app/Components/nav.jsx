"use client";

import Link from 'next/link'
import { signOut, useSession } from "next-auth/react";

function NavBar() {
    const { data: session } = useSession();

    return (
        <div className="navbar bg-[#1d1d1d] text-white shadow-[0_4px_15px_rgba(250,0,0,0.4)] top-0 z-50">
        <div className="flex-1">
            <a href="/" className="btn btn-ghost text-xl">Boss PlayGround</a>
        </div>
        <div className="flex-none">
            {!session ? (
            <ul className="menu menu-horizontal px-2">
                <li><a href="/signIn">Sign In</a></li>
                <li><a href="/signUp">Sign Up</a></li>
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
            ) : (
            <ul className="menu menu-horizontal px-2">
                <Link href="/WelcomePage" className="px-3 py-2 hover:underline rounded-md cursor-pointer">Profile</Link>
                <li><a onClick={() => signOut()} className="p-1 pb-2 px-2 bg-red-600 rounded-md hover:bg-red-400 cursor-pointer">Sign Out</a></li>
            </ul>
            )}
        </div>
        </div>
    );
}

export default NavBar;
