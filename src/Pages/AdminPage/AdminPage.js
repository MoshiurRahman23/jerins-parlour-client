import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const AdminPage = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>User : {user?.length}</h1>
        </div>
    );
};

export default AdminPage;