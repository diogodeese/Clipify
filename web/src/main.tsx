import store from '@redux/store'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Router } from './app/Router/router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router />,
  </Provider>,
)
