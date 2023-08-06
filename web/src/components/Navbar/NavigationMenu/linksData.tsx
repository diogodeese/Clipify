import { NavigationMenuType } from './navigationMenu.types'

const linksData: NavigationMenuType[] = [
  {
    url: '/games',
    name: 'games',
    displayName: 'Games',
    notLoggedInRequired: false,
  },
  {
    url: '/signIn',
    name: 'signIn',
    displayName: 'Sign In',
    notLoggedInRequired: true,
  },
  {
    url: '/signUp',
    name: 'signUp',
    displayName: 'Sign Up',
    notLoggedInRequired: true,
  },
]

export default linksData
