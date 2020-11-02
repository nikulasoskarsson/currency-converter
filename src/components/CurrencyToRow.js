import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrencyTo, getExchangeRate } from '../actions/currencyActions'

const CurrencyToRow = () => {
  const dispatch = useDispatch()
  const exchangeRate = useSelector((state) => state.currency.exchangeRate)
  const currencies = useSelector((state) => state.currency.currencies)
  const amount = useSelector((state) => state.currency.amount)
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrencyTo
  )

  //
  useEffect(() => {
    dispatch(getExchangeRate())
  }, [])
  //TESTING
  // useEffect(() => {
  //   console.log(exchangeRate)
  // }, [exchangeRate])

  return (
    <div className='row currency-row'>
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

      <p>{exchangeRate * amount}</p>
    </div>
  )
}

export default CurrencyToRow
