import React from 'react'

function NavBar() {
return (
    <div className="navbar bg-[#2e2e2e] text-white shadow-xl">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Boss PlayGround</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-2">
                <li><a href='/signIn'>Sign In</a></li>
                <li><a href='/register'>Sign Up</a></li>
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