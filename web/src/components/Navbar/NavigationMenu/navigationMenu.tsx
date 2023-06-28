import { MediumAvatar } from '@components/Avatar/avatar'
import linksData from './linksData'
import { NavLink } from './navLink'

export const NavigationMenu = () => {
  return (
    <div className="flex h-full items-center gap-3 text-base">
      {linksData.map((link, key) => (
        <NavLink key={key} url={link.url} displayName={link.displayName} />
      ))}
      <MediumAvatar username="User Name" />
    </div>
  )
}