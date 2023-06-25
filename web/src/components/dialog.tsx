import * as RadixDialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { JSX } from 'react/jsx-dev-runtime'
import { ButtonSave } from './Buttons/buttonSave'

interface DialogProps {
  children: JSX.Element[]
}

const Dialog = (props: DialogProps) => (
  <RadixDialog.Root>
    <RadixDialog.Trigger asChild>{props.children[0]}</RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <RadixDialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-neutral-800 px-5 py-3 focus:outline-none">
        <RadixDialog.Title className="m-0 text-lg font-medium text-neutral-200">
          Avatar Preview
        </RadixDialog.Title>
        <RadixDialog.Description className="mb-5 mt-[10px] text-sm leading-normal text-neutral-300">
          Crop your avatar image.
        </RadixDialog.Description>
        {props.children[1]}
        <div className="mt-6 flex justify-end">
          <RadixDialog.Close asChild>
            <ButtonSave aria-label="Close" />
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
