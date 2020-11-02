import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import CurrencyFromRow from './CurrencyFromRow'
import SwapRow from './SwapRow'
import CurrencyToRow from './CurrencyToRow'
import Loading from './Loading'

const ExchangeRateContainer = () => {
  const loading = useSelector((state) => state.currency.loading)
  const error = useSelector((state) => state.currency.error)
  useEffect(() => {
    console.log('loading changed')
    console.log('loading', loading)
  }, [loading])
  return (
    <>
      <CurrencyFromRow />
      {!loading ? (
        <>
          <SwapRow />
          <CurrencyToRow />
        </>
      ) : (
        <Loading />
      )}

      {error && <p class='error'>{error}</p>}
    </>
  )
}

export default ExchangeRateContainer
