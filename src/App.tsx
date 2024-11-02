import './App.css'
import { Provider } from 'react-redux'
import store from './common/redux/store'
import './assets/styles/home.scss'
import Router from './common/router'
import { BrowserRouter } from 'react-router-dom'
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
