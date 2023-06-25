import * as RadixToast from '@radix-ui/react-toast'
import { cloneElement, useEffect, useRef, useState } from 'react'
import { JSX } from 'react/jsx-dev-runtime'

interface ToastProps {
  children: JSX.Element
}

export const ToastSuccess = (props: ToastProps) => {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <RadixToast.Provider swipeDirection="down">
      {cloneElement(props.children, {
        onClick: () => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        },
      })}

      <RadixToast.Root
        className="flex items-center justify-between gap-x-4 rounded-md bg-neutral-800 p-4 data-[swipe=cancel]:translate-y-0 data-[swipe=move]:translate-y-32 data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        onOpenChange={setOpen}
      >
        <RadixToast.Title className="text-sm font-medium text-neutral-300">
          Updated successfully
        </RadixToast.Title>
        <RadixToast.Action asChild altText="Close toast">
          <button className="inline-flex h-6 items-center justify-center rounded border border-green-300 bg-green-200 px-3 text-xs font-medium leading-6 text-green-600">
            Okay
          </button>
        </RadixToast.Action>
      </RadixToast.Root>
      <RadixToast.Viewport className="fixed bottom-4 left-[50%] z-50 m-0 flex w-96 translate-x-[-50%] list-none flex-col gap-3 outline-none" />
    </RadixToast.Provider>
  )
}
