import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersByNationality = () => {
    const [nationality, setNationality] = useState('');
    const [users, setUsers] = useState([]);

    const fetchUsersByNationality = async () => {
        try {
            const response = await axios.get(`/api/users/nationality/${nationality}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users by nationality:', error);
        }
    };

    useEffect(() => {
        if (nationality) {
            fetchUsersByNationality();
        }
    }, [nationality]);

    return (
        <div>
            <h2>List of Users by Nationality</h2>
            <input
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                placeholder="Enter nationality"
            />
            <button onClick={fetchUsersByNationality}>Fetch Users</button>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.email} - {user.nationality} - {user.address} - {user.phone}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
};

export default UsersByNationality;
