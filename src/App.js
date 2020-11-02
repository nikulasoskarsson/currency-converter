import './App.css'

import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header'
import CurrencyFromRow from './components/CurrencyFromRow'
import CurrencyToRow from './components/CurrencyToRow'
import SwapRow from './components/SwapRow'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <CurrencyFromRow />
        <SwapRow />
        <CurrencyToRow />
      </div>
    </Provider>
  )
}

export default App
