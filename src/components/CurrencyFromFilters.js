import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterFrom } from '../actions/currencyActions'

const CurrencyFromFilters = () => {
  const dispatch = useDispatch()
  const filterString = useSelector((state) => state.currency.fromFilterString)
  const filteredCurrencies = useSelector(
    (state) => state.currency.fromFilteredCurrencies
  )
  return (
    <div>
      <input
        type='text'
        onChange={(e) => dispatch(filterFrom(e.target.value))}
      />
      {filterString !== '' && (
        <div>
          {filteredCurrencies.map((filteredCurrency) => (
            <button>{filteredCurrency}</button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CurrencyFromFilters
