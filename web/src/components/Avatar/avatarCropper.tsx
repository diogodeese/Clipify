import Dialog from '@components/dialog'
import { CropIcon } from '@radix-ui/react-icons'
import convertFileToBase64 from '@utils/convertFileToBase64'
import 'cropperjs/dist/cropper.css'
import { ChangeEventHandler, createRef, useEffect, useState } from 'react'
import { Cropper, ReactCropperElement } from 'react-cropper'
import { JSX } from 'react/jsx-dev-runtime'
import { ProfileAvatar } from './avatar'

interface AvatarCropperProps {
  children: JSX.Element
}

export const AvatarCropper = ({ children }: AvatarCropperProps) => {
  const fileRef = createRef<HTMLInputElement>() // Ref of the file input
  const [uploaded, setUploaded] = useState(null as string | null) // Selected image
  const [cropped, setCropped] = useState(null as string | null) // Resulting cropped image
  const cropperRef = createRef<ReactCropperElement>() // Reference of cropper element

  const onFileInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target?.files?.[0]
    if (file) {
      convertFileToBase64(file).then((base64) => {
        setUploaded(base64)
      })
    }
  }

  const onCrop = () => {
    const imageElement: ReactCropperElement | null = cropperRef.current
    const cropper: Cropper | undefined = imageElement?.cropper
    if (cropper) setCropped(cropper.getCroppedCanvas().toDataURL())
  }

  useEffect(() => {
    if (uploaded) {
      document.getElementById('test')?.click()
      setTimeout(() => {
        document.getElementById('crop-button')?.click()
      }, 1)
    }
  }, [uploaded])

  return (
    <>
      {uploaded ? (
        <div>
          <Dialog>
            <div>
              <button id="test" className="hidden">
                test
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-neutral-400">Your image</span>
                <Cropper
                  style={{ height: 144, width: 144 }}
                  src={uploaded}
                  autoCropArea={1}
                  aspectRatio={1}
                  viewMode={3}
                  guides={false}
                  ref={cropperRef}
                />
                <button
                  id="crop-button"
                  className="h-fit w-fit rounded border border-zinc-600 bg-neutral-700 px-2 py-1 font-medium transition-colors hover:border-violet-500 focus:outline-none"
                  onClick={onCrop}
                >
                  <CropIcon />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-neutral-400">Preview</span>
                {cropped ? (
                  <ProfileAvatar imageUrl={cropped} username="Cropped" />
                ) : (
                  <div className="h-36 w-36 rounded-full bg-neutral-700"></div>
                )}
              </div>
            </div>
          </Dialog>
          {/* restyle */}
        </div>
      ) : (
        <>
          {/* don't accept gif's */}
          <input
            className="hidden"
            type="file"
            ref={fileRef}
            onChange={onFileInputChange}
            accept="image/png,image/jpeg,image/gif"
          />
          <button
            className="rounded-full border border-zinc-600 bg-neutral-700 transition-all hover:border-violet-500 hover:opacity-80 focus:border-violet-500 focus:opacity-80 focus:outline-none"
            onClick={() => fileRef.current?.click()}
          >
            {children}
          </button>
        </>
      )}
    </>
  )
}
