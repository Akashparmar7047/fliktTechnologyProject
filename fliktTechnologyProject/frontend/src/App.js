import React, { useEffect, useState } from 'react';
import { api } from './api';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  const fetchUsers = async () => {
    const res = await api.get('/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <div className="App">
      <h1>User Management Dashboard</h1>
      <button onClick={() => { setEditingUser(null); setFormOpen(true); }}>Add User</button>
      <UserTable users={users} onEdit={(user) => { setEditingUser(user); setFormOpen(true); }} onDelete={handleDelete} />
      {formOpen && <UserForm selectedUser={editingUser} onSuccess={fetchUsers} onClose={() => setFormOpen(false)} />}
    </div>
  );
}

export default App;