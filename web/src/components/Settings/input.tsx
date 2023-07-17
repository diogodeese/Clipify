import { InputHTMLAttributes } from 'react'

export const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      {/* {error && <p className="text-xs text-red-400">{error}</p>} */}
      <input
        {...rest}
        className="h-8 w-64 rounded border border-transparent px-2 py-1 text-sm caret-violet-500 transition-colors focus:border-violet-500 focus:outline-none"
      />
    </>
  )
}
