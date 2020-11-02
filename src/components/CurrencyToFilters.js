import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  filterTo,
  getExchangeRate,
  setCurrencyTo,
} from '../actions/currencyActions'

const CurrencyToFilters = () => {
  const dispatch = useDispatch()
  const filterString = useSelector((state) => state.currency.toFilterString)
  const filteredCurrencies = useSelector(
    (state) => state.currency.toFilteredCurrencies
  )
  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <input
        style={{ width: '100%' }}
        placeholder='Search for currency'
        type='text'
        onChange={(e) => dispatch(filterTo(e.target.value))}
      />
      {filterString !== '' && (
        <div style={{ width: '100%', marginTop: '0.5rem' }}>
          {filteredCurrencies.map((filteredCurrency) => (
            <button
              key={filteredCurrency}
              onClick={() => {
                dispatch(setCurrencyTo(filteredCurrency))
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

export default CurrencyToFilters
