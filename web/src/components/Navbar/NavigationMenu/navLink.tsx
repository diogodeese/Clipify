import { Link } from 'react-router-dom'
import { NavigationMenuType } from './navigationMenu.types'

export const NavLink = (props: NavigationMenuType) => {
  return (
    <Link
      className="flex h-full items-center border-b-2 border-b-transparent px-2 font-semibold transition-colors hover:border-b-neutral-400 hover:text-violet-300"
      to={props.url}
    >
      {props.displayName}
    </Link>
  )
}
