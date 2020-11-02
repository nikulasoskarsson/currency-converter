import {
  GET_CURRENCIES,
  GET_EXCHANGE_RATE,
  SET_CURRENCY_FROM,
  SET_CURRENCY_TO,
  SET_AMOUNT,
  SWITCH_FROM_TO,
  SET_LOADING,
  SET_ERROR,
} from './types'

export const getExchangeRate = () => async (dispatch, getState) => {
  console.log(' it is running')
  dispatch(setLoading())
  const state = getState()
  const selectedFrom = state.currency.selectedCurrencyFrom
  const selectedTo = state.currency.selectedCurrencyTo

  try {
    const res = await fetch(`${selectedFrom}`)
    const data = await res.json()

    if (res.status !== 200) {
      console.log('error ')
      dispatch({
        type: SET_ERROR,
        payload: 'There was an error making the convertion',
      })
    } else {
      console.log(' no error')
      const exchangeRate = data.rates[selectedTo]
      dispatch({ type: GET_EXCHANGE_RATE, payload: exchangeRate })
    }
  } catch (error) {
    console.log('server error')
    dispatch({
      type: SET_ERROR,
      payload: 'There was an error making the convertion',
    })
  }
}

export const setCurrencyFrom = (currencyFrom) => {
  return { type: SET_CURRENCY_FROM, payload: currencyFrom }
}

export const setCurrencyTo = (currencyTo) => {
  return { type: SET_CURRENCY_TO, payload: currencyTo }
}

export const setAmount = (amount) => {
  return { type: SET_AMOUNT, payload: amount }
}
export const switchFromTo = () => {
  return { type: SWITCH_FROM_TO }
}

// Set the loading to true
export const setLoading = () => {
  console.log('set loading')
  return { type: SET_LOADING }
}
