import './App.css'

import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header'
import CurrencyRow from './components/CurrencyRow'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <CurrencyRow />
      </div>
    </Provider>
  )
}

export default App
