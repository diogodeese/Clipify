import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext()

  return (
    <input
      id={props.name}
      className="flex-1 rounded border border-zinc-700 bg-neutral-800 px-3 py-2 text-neutral-200 shadow-sm transition-colors focus:border-violet-500 focus:outline-none"
      {...register(props.name)}
      {...props}
    />
  )
}
