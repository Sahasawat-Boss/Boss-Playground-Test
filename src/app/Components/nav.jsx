import React from 'react'

function NavBar() {
return (
        <div className="navbar bg-[#ebe5ba] shadow-md mb-3">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Boss PlayGround</a>
            </div>
            <div className="flex-none gap-2 mx-5">
                <div className="form-control">
                <input type="text" placeholder="Search Here" className="input input-bordered w-40 h-8 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
    </div>
)
}

export default NavBar