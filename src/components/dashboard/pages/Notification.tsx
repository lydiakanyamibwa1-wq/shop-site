import React, { useState } from 'react';

const NotificationsSettings = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Notification Settings</h2>

      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-700 font-medium">Email Notifications</p>
          <input type="checkbox" checked={emailNotif} onChange={() => setEmailNotif(!emailNotif)} />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-700 font-medium">SMS Notifications</p>
          <input type="checkbox" checked={smsNotif} onChange={() => setSmsNotif(!smsNotif)} />
        </div>
      </div>
    </div>
  );
};

export default NotificationsSettings;
