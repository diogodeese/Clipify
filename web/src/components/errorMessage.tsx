interface ErrorMessageProps {
  message: string | undefined
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  return <span className="text-sm text-red-500">{props.message}</span>
}
