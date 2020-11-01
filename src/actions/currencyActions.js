import {
  GET_CURRENCIES,
  SET_CURRENCY_FROM,
  SET_CURRENCY_TO,
  SET_LOADING,
  SET_ERROR,
} from './types'

export const getExchangeRates = () => async (dispatch, getState) => {
  console.log('action running')
  setLoading() // Set the loading to true before starting the request
  const state = getState()
  const selectedFrom = state.currency.selectedCurrencyFrom
  const selectedTo = state.currency.selectedCurrencyTo

  try {
    const res = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${selectedFrom}`
    )
    const data = await res.json()
    console.log(data.rates[selectedTo])
    dispatch()
  } catch (error) {
    return {
      type: SET_ERROR,
      payload: 'There was an error making the convertion',
    }
  }
}

export const setCurrencyFrom = (currencyFrom) => {
  return { type: SET_CURRENCY_FROM, payload: currencyFrom }
}

// Set the loading to true
export const setLoading = () => {
  return { type: SET_LOADING }
}
