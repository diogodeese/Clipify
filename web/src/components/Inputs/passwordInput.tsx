interface InputProps {
  defaultValue?: string
  placeholder: string
}

export const PasswordInput = (props: InputProps) => {
  return (
    <input
      className="h-8 w-64 rounded border border-transparent px-2 py-1 text-sm caret-violet-500 transition-colors focus:border-violet-500 focus:outline-none"
      type="password"
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
    />
  )
}
