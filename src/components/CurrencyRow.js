import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrencyFrom, getExchangeRates } from '../actions/currencyActions'

const CurrencyRow = () => {
  const dispatch = useDispatch()
  const currencies = useSelector((state) => state.currency.currencies)
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrencyFrom
  )

  return (
    <div style={{ display: 'flex' }}>
      <select
        onChange={(e) => {
          dispatch(setCurrencyFrom(e.target.value))
          dispatch(getExchangeRates())
        }}
        value={selectedCurrency}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <input type='number' id='amount-one' placeholder='0' value='1' />
    </div>
  )
}

export default CurrencyRow
