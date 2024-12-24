import AdminNav from "../Component/AdminNav"
import Container from "../Component/Container"
import AdminFooter from "../Component/AdminFooter"
import SideNav from "../Component/SideNav"
import Link from 'next/link'

function usersConfig() {
return (
    <Container>
        <AdminNav/>
        <div className='flex-grow'>
                <div className='container mx-16'>
                    <div className='flex justify-Start mt-10'>
                        <SideNav />
                        <div className='p-10'>
                            <h3 className='text-3xl mb-3'>User Configuration</h3>
                            <p>A list of users that will retrieved from a MongoDB database</p>
                            
                            {/*User Config Table*/}
                            <div className='shadow-lg overflow-x-auto '>
                                <table className='text-left mt-3 w-auto'>
                                    <thead>
                                        <tr className='bg-black text-white'>
                                            <th className='p-5 border-[1px]'>ID</th>
                                            <th className='p-5 border-[1px]'>Username</th>
                                            <th className='p-5 border-[1px]'>Email</th>
                                            <th className='p-5 border-[1px]'>Password</th>
                                            <th className='p-5 border-[1px]'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='p-5'>0001</td>
                                            <td className='p-5'>Boss-Sahasawat</td>
                                            <td className='p-5'>Test@gmail.com</td>
                                            <td className='p-5'>987456789</td>
                                            <td className='p-5'>
                                                <Link className='bg-blue-600 text-white border py-2 px-3 rounded-lg text-lg my-2 mr-1' href="">Edit</Link>
                                                <Link className='bg-red-800 text-white border py-2 px-3 rounded-lg text-lg my-2' href="">Delete</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <AdminFooter/>
    </Container>
)
}

export default usersConfig