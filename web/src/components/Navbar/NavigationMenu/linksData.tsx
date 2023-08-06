import { NavigationMenuType } from './navigationMenu.types'

const linksData: NavigationMenuType[] = [
  {
    url: '/games',
    name: 'games',
    displayName: 'Games',
    displayIfSignedIn: true,
  },
  {
    url: '/signIn',
    name: 'signIn',
    displayName: 'Sign In',
    displayIfSignedIn: false,
  },
  {
    url: '/signUp',
    name: 'signUp',
    displayName: 'Sign Up',
    displayIfSignedIn: false,
  },
]

export default linksData
