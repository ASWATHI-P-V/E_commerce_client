import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    creditCard: '',
  });

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user) {
          throw new Error('Unauthorized: User not found');
        }

        const token = localStorage.getItem('token');
        if (!token) throw new Error('Unauthorized: Token not found');

        const res = await axios.get('http://localhost:5000/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(res.data);
        setFormData({
          name: res.data.name,
          address: res.data.address,
          phone: res.data.phone,
          creditCard: res.data.creditCard || '',
        });
      } catch (err) {
        setError(err.response?.data?.msg || 'Failed to fetch user data');
        console.error('Fetch user error:', err);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/user/${user._id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(formData);
      setIsEditing(false);
      alert('Profile updated successfully');
    } catch (err) {
      setError('Failed to update profile');
      console.error('Profile update error:', err);
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {error && <p className="error">{error}</p>}
      {userData && (
        <div>
          {isEditing ? (
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Credit Card:
                <input
                  type="text"
                  name="creditCard"
                  value={formData.creditCard}
                  onChange={handleInputChange}
                />
              </label>
              <button className="btn" onClick={handleSaveChanges}>Save Changes</button>
              <button className="btn" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <p>Address: {userData.address}</p>
              <p>Phone: {userData.phone}</p>
              {userData.creditCard ? (
                <p>Credit Card: {userData.creditCard}</p>
              ) : (
                <p>Credit card details not found</p>
              )}
              <button className="btn" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
