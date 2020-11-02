import './App.css'

import { Provider } from 'react-redux'
import store from './store'
import ExchangeRateContainer from './components/ExchangeRateContainer'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <ExchangeRateContainer />
      </div>
    </Provider>
  )
}

export default App
