import React from 'react'
import Link from 'next/link'

function SideNav() {
  return (
    <nav className='shadow-xl w-72 bg-gray-200 pt-10 px-10 rounded-md'>
        <ul>
            <li>
                <h3 className='text-xl font-bold'>Admin Panel</h3>
                <Link href="/AdminPage/" className='block my-8 rounded-md'>Admin Dashboard</Link>
                <Link href="/AdminPage/usersConfig" className='block my-8 rounded-md'>User Config</Link>
                <Link href="/Content" className='block my-8 rounded-md'>Content Config</Link>
            </li>
        </ul>
    </nav>
  )
}

export default SideNav