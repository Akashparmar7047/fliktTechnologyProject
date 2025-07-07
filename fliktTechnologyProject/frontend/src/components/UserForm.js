import React, { useState, useEffect } from 'react';
import { api } from '../api';

export default function UserForm({ selectedUser, onSuccess, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', age: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedUser) setFormData(selectedUser);
  }, [selectedUser]);

  const validate = () => {
    if (!formData.name || !formData.email || !/^[0-9]{10}$/.test(formData.phone) || formData.age < 1 || formData.age > 100) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return setError('Invalid input. Please check all fields.');

    try {
      if (selectedUser)
        await api.put(`/users/${selectedUser._id}`, formData);
      else
        await api.post('/users', formData);

      onSuccess();
      onClose();
    } catch (err) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
        <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
        <input type="tel" placeholder="Phone" maxLength={10} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
        <input type="number" placeholder="Age" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} min={1} max={100} required />
        <button type="submit">{selectedUser ? 'Update' : 'Add'} User</button>
        <button type="button" onClick={onClose}>Cancel</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}