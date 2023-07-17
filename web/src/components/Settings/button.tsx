import { ButtonHTMLAttributes } from 'react'

export const Button = ({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className="rounded border border-neutral-600 bg-neutral-50 px-2 py-1 text-sm font-medium text-zinc-950 transition-colors hover:bg-neutral-300"
    >
      Save
    </button>
  )
}
