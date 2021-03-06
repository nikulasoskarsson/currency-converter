import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setCurrencyFrom,
  getExchangeRate,
  setAmount,
} from '../actions/currencyActions'

const CurrencyFromRow = () => {
  const dispatch = useDispatch()
  const amount = useSelector((state) => state.currency.amount)
  const currencies = useSelector((state) => state.currency.currencies)
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrencyFrom
  )

  return (
    <div className='row currency-row'>
      <select
        onChange={(e) => {
          dispatch(setCurrencyFrom(e.target.value))
          dispatch(getExchangeRate())
        }}
        value={selectedCurrency}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <input
        className='currency-input'
        onChange={(e) => {
          dispatch(setAmount(e.target.value))
          dispatch(getExchangeRate())
        }}
        type='number'
        id='amount-one'
        placeholder='1'
        min='1'
        value={amount}
      />
    </div>
  )
}

export default CurrencyFromRow
