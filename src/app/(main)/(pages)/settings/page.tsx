import React from 'react'

import ProfileForm from '@/components/forms/profile-form'

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="flex sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg items-center justify-between border-b text-4xl">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">
            User Profile
          </h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfileForm />
      </div>
    </div>
  )
}

export default SettingsPage
