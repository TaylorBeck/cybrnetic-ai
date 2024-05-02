'use client'

import React from 'react'
import UploadCareButton from './upload-care-button'
import { useRouter } from 'next/navigation'

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload?: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload}: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture </p>
      <div className="flex h-[30vh] flex-col justify-center items-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12"></div>
          </>
         ) : (
          <UploadCareButton />
         )}
      </div>
    </div>
  )
}

export default ProfilePicture
