import React from 'react'
import Link from 'next/link'

function SideNav() {
  return (
    <nav className='shadow-xl bg-gray-200 p-10 rounded-md'>
        <ul>
            <li>
                <Link href="/AdminPage" className='block my-3 p-3 rounded-md'>Admin Dashboard</Link>
                <Link href="/users" className='block my-3 p-3 rounded-md'>User Configuration</Link>
                <Link href="/Content" className='block my-3 p-3 rounded-md'>Content Configuration</Link>
            </li>
        </ul>
    </nav>
  )
}

export default SideNav