import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { switchFromTo, getExchangeRate } from '../actions/currencyActions'

const SwapRow = () => {
  const dispatch = useDispatch()
  const selectedCurrencyFrom = useSelector(
    (state) => state.currency.selectedCurrencyFrom
  )
  const selectedCurrencyTo = useSelector(
    (state) => state.currency.selectedCurrencyTo
  )

  const error = useSelector((state) => state.currency.error)
  const exchangeRate = useSelector((state) => state.currency.exchangeRate)
  return (
    <div className='row swap-row'>
      <button
        onClick={() => {
          dispatch(switchFromTo())
          dispatch(getExchangeRate())
        }}
      >
        Swap
      </button>
      <p>
        {!error &&
          `1 ${selectedCurrencyFrom} = ${exchangeRate} ${selectedCurrencyTo}`}
      </p>
    </div>
  )
}

export default SwapRow
