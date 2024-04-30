'use client'
import React, { useRef, useEffect } from 'react'

import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'

type Props = {
  onUpload?: any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef  = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (event: any) => {
      const file = await onUpload(event.detail.cdnUrl)

      if (file) {
        router.refresh()
      }
    }

    ctxProviderRef.current?.addEventListener('file-upload-success', handleUpload)
  }, [])

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey=""
      />
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`${process.env.NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC}${LR.PACKAGE_VERSION}${process.env.NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE}`}
      />
      <lr-upload-ctx-provider
        ref={ctxProviderRef}
        ctx-name="my-uploader"
      />
    </div>
  )
}

export default UploadCareButton
