import './App.css'

import { Provider } from 'react-redux'
import store from './store'
import ExchangeRateContainer from './components/ExchangeRateContainer'
import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <ExchangeRateContainer />
      </div>
    </Provider>
  )
}

export default App
