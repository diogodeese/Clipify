import { Account } from '@app/Account/account'
import { Landing } from '@app/Landing/landing'
import { Profile } from '@app/Profile/profile'
import { SignIn } from '@app/SignIn/signIn'
import { routerType } from './router.types'

const pagesData: routerType[] = [
  {
    title: 'landing',
    path: '/',
    element: <Landing />,
  },
  {
    title: 'user',
    path: '/u/:id',
    element: <Profile />,
  },
  {
    title: 'account',
    path: '/account',
    element: <Account />,
  },
  {
    title: 'signIn',
    path: 'signIn',
    element: <SignIn />,
  },
  {
    title: 'not-found',
    path: '*',
    element: <div>Not Found</div>,
  },
]

export default pagesData
