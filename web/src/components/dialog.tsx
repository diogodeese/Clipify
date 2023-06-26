import * as RadixDialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { JSX } from 'react/jsx-dev-runtime'

interface DialogProps {
  children: JSX.Element[]
}

const Dialog = (props: DialogProps) => (
  <RadixDialog.Root>
    <RadixDialog.Trigger asChild>{props.children[0]}</RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 bg-blackA9" />
      <RadixDialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-neutral-800 px-5 py-3 focus:outline-none">
        <RadixDialog.Title className="m-0 text-lg font-medium text-neutral-200">
          Avatar Preview
        </RadixDialog.Title>
        <RadixDialog.Description className="mb-5 mt-[10px] text-sm leading-normal text-neutral-300">
          Crop your avatar image.
        </RadixDialog.Description>
        {props.children[1]}
        <div className="mt-6 flex justify-end">
          <RadixDialog.Close asChild>
            <button
              aria-label="Close"
              className="rounded border border-neutral-600 bg-neutral-50 px-2 py-1 text-sm font-medium text-zinc-950 transition-colors hover:bg-neutral-300"
            >
              Save
            </button>
          </RadixDialog.Close>
        </div>
        <RadixDialog.Close asChild>
          <button
            className="absolute right-3 top-3 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-neutral-600 focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
)

export default Dialog
