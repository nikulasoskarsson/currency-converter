import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  filterFrom,
  getExchangeRate,
  setCurrencyFrom,
} from '../actions/currencyActions'

const CurrencyFromFilters = () => {
  const dispatch = useDispatch()
  const filterString = useSelector((state) => state.currency.fromFilterString)
  const filteredCurrencies = useSelector(
    (state) => state.currency.fromFilteredCurrencies
  )
  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <input
        style={{ width: '100%' }}
        placeholder='Search for currency'
        type='text'
        onChange={(e) => dispatch(filterFrom(e.target.value))}
      />
      {filterString !== '' && (
        <div style={{ width: '100%', marginTop: '0.5rem' }}>
          {filteredCurrencies.map((filteredCurrency) => (
            <button
              onClick={() => {
                dispatch(setCurrencyFrom(filteredCurrency))
                dispatch(getExchangeRate())
              }}
              style={{ marginLeft: '0.3rem' }}
              className='button'
            >
              {filteredCurrency}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CurrencyFromFilters
