import {
  GET_CURRENCIES,
  GET_EXCHANGE_RATE,
  SET_CURRENCY_FROM,
  SET_CURRENCY_TO,
  SET_AMOUNT,
  SET_LOADING,
  SET_ERROR,
} from './types'

export const getExchangeRate = () => async (dispatch, getState) => {
  setLoading() // Set the loading to true before starting the request
  const state = getState()
  const selectedFrom = state.currency.selectedCurrencyFrom
  const selectedTo = state.currency.selectedCurrencyTo
  const amount = state.currency.amount

  try {
    const res = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${selectedFrom}`
    )
    const data = await res.json()
    const exchangeRate = data.rates[selectedTo] * amount
    dispatch({ type: GET_EXCHANGE_RATE, payload: exchangeRate })
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

export const setCurrencyTo = (currencyTo) => {
  return { type: SET_CURRENCY_TO, payload: currencyTo }
}

export const setAmount = (amount) => {
  return { type: SET_AMOUNT, payload: amount }
}

// Set the loading to true
export const setLoading = () => {
  return { type: SET_LOADING }
}
