import React from 'react';
import ProfileSettings from './Profile';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
      <ProfileSettings />
    </div>
  );
};

export default SettingsPage;
