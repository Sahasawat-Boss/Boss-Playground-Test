"use client"; // Add this at the top to make it a client component
/*Error if not User Client*/

import React, { useEffect, useState } from "react";

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Async function to fetch users
    const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Users Data:", data); // Log user data to the console
        setUsers(data);
    } catch (error) {
        console.error("Error fetching users:", error);
    } finally {
        setLoading(false);
    }
    };

    useEffect(() => {
    fetchUsers();
    }, []);

    if (loading) {
    return <div className="text-center py-10">Loading...</div>;
    }

    return (
    /* ===== Table =====*/
    <div className="px-20">
        <h1 className="text-2xl font-bold text-center mb-4">User Details</h1>
        <p className="text-md font-semibold mb-6">This user details table uses an asynchronous function to fetch data from "https://jsonplaceholder.typicode.com/users," ensuring efficient real-time data retrieval. It displays key user information, such as ID, name, username, email, and city, in a clean, interactive format. The async/await functionality ensures non-blocking operations, creating a responsive and seamless user experience. Dynamically rendered and styled for readability, this table demonstrates the practical integration of API data into modern web applications.</p>
        <table className="w-full table-auto border-collapse border-2 border-black">
            <thead className="bg-[#ffffff]">
                <tr>
                <th className="border border-black px-4 py-2">ID No.</th>
                <th className="border border-black px-4 py-2">Name</th>
                <th className="border border-black px-4 py-2">Username</th>
                <th className="border border-black px-4 py-2">Email</th>
                <th className="border border-black px-4 py-2">City</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                    <td className="border border-black px-4 py-2 text-center">{user.id}</td>
                    <td className="border border-black px-4 py-2">{user.name}</td>
                    <td className="border border-black px-4 py-2">{user.username}</td>
                    <td className="border border-black px-4 py-2">{user.email}</td>
                    <td className="border border-black px-4 py-2">{user.address.city}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    /* ===== Table =====*/
    );
};

export default UserTable;
