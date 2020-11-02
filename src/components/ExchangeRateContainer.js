import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import CurrencyFromRow from './CurrencyFromRow'
import SwapRow from './SwapRow'
import CurrencyToRow from './CurrencyToRow'

const ExchangeRateContainer = () => {
  const loading = useSelector((state) => state.currency.loading)
  useEffect(() => {
    console.log('loading changed')
    console.log('loading', loading)
  }, [loading])
  return (
    <>
      {!loading ? (
        <>
          <Header />
          <CurrencyFromRow />
          <SwapRow />
          <CurrencyToRow />
        </>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default ExchangeRateContainer