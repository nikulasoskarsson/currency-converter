import React from 'react'
import { useSelector } from 'react-redux'
import CurrencyFromRow from './CurrencyFromRow'
import SwapRow from './SwapRow'
import CurrencyToRow from './CurrencyToRow'
import Loading from './Loading'
import CurrencyFromFilters from './CurrencyFromFilters'
import CurrencyToFilters from './CurrencyToFilters'

const ExchangeRateContainer = () => {
  const loading = useSelector((state) => state.currency.loading)
  const error = useSelector((state) => state.currency.error)

  return (
    <>
      <CurrencyFromRow />
      {!loading ? (
        <>
          <CurrencyFromFilters />
          <SwapRow />
          <CurrencyToRow />
          <CurrencyToFilters />
        </>
      ) : (
        <Loading />
      )}

      {error && <p className='error'>{error}</p>}
    </>
  )
}

export default ExchangeRateContainer
