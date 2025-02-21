// src/components/AdminPanel.js

import React, { useState } from 'react';
import UsersByNationality from './UsersByNationality';
import AllUsers from './AllUsers';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('all-users');

    const renderContent = () => {
        switch (activeTab) {
            case 'all-users':
                return <AllUsers />;
            case 'by-nationality':
                return <UsersByNationality />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => setActiveTab('all-users')}>All Users</button>
                    </li>
                    <li>
                        <button onClick={() => setActiveTab('by-nationality')}>Users by Nationality</button>
                    </li>
                </ul>
            </nav>
            <div>
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminPanel;
