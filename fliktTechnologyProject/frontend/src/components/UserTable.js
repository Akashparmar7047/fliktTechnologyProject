import React from 'react';

export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th><th>Age</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.age}</td>
            <td>
              <button onClick={() => onEdit(user)}>Edit</button>
              <button onClick={() => onDelete(user._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}