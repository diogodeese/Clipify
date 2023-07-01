import { Link } from 'react-router-dom'
import { NavigationMenu } from './NavigationMenu/navigationMenu'
import { Search } from './search'

export const NavigationBar = () => {
  return (
    <div className="fixed top-0 z-50 flex w-screen justify-center border-b border-b-neutral-700 bg-neutral-800 px-20">
      <div className="flex h-16 w-[1000px] items-center justify-between ">
        <Link to={'/'}>
          <span className="text-xl font-bold tracking-wide text-violet-400">
            Clipify
          </span>
        </Link>
        <Search />
        <NavigationMenu />
      </div>
    </div>
  )
}
