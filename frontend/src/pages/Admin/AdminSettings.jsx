import React, { useState } from 'react';

const AdminSettings = () => {
  const [adminName, setAdminName] = useState('Bhumesh Katre');
  const [email, setEmail] = useState('admin@sahayata.in');
  const [password, setPassword] = useState('');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  const handleSave = () => {
    // In real use, send data to backend/Firebase here
    alert('Settings updated successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Admin Settings</h2>

      <div className="space-y-4">
        {/* Profile Picture */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Image</label>
          <div className="flex items-center mt-2">
            <img
              src={profileImage || 'https://via.placeholder.com/80'}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border mr-4"
            />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        </div>

        {/* Admin Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Admin Name</label>
          <input
            type="text"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border rounded p-2"
            placeholder="Leave blank to keep old password"
          />
        </div>

        {/* Maintenance Mode */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={maintenanceMode}
            onChange={() => setMaintenanceMode(!maintenanceMode)}
            className="mr-2"
          />
          <label>Enable Maintenance Mode</label>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
