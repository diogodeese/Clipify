import { Link } from 'react-router-dom'

interface TabSelectorProps {
  tabName: string
  url: string
}

export const TabSelector = (props: TabSelectorProps) => {
  return (
    <Link
      className="rounded px-4 py-2 transition-colors hover:bg-zinc-800"
      to={props.url}
    >
      {props.tabName}
    </Link>
  )
}
