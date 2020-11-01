import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrencyTo, getExchangeRate } from '../actions/currencyActions'

const CurrencyToRow = () => {
  const dispatch = useDispatch()
  const exchangeRate = useSelector((state) => state.currency.exchangeRate)
  const currencies = useSelector((state) => state.currency.currencies)
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrencyTo
  )

  //
  useEffect(() => {
    dispatch(getExchangeRate())
  }, [])
  //TESTING
  useEffect(() => {
    console.log(exchangeRate)
  }, [exchangeRate])

  return (
    <div style={{ display: 'flex' }}>
      <select
        onChange={(e) => {
          dispatch(setCurrencyTo(e.target.value))
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

      <p>{exchangeRate}</p>
    </div>
  )
}

export default CurrencyToRow
