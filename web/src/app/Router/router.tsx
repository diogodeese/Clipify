import { BrowserRouter, Route, Routes } from 'react-router-dom'
import pagesData from './pagesData'
import { routerType } from './router.types'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pagesData.map(({ title, path, element }: routerType) => (
          <Route key={title} path={`/${path}`} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
