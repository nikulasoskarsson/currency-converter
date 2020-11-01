import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrencyFrom, getExchangeRate } from '../actions/currencyActions'

const CurrencyFromRow = () => {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.currency.error)
  const exchangeRate = useSelector((state) => state.currency.exchangeRate)
  const currencies = useSelector((state) => state.currency.currencies)
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrencyFrom
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

      <input type='number' id='amount-one' placeholder='0' value='1' />
    </div>
  )
}

export default CurrencyFromRow
