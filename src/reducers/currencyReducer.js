import {
  GET_CURRENCIES,
  GET_EXCHANGE_RATE,
  SET_CURRENCY_FROM,
  SET_CURRENCY_TO,
  SET_LOADING,
  SET_ERROR,
} from '../actions/types'

const initialState = {
  currencies: ['AED', 'ARS', 'BGN', 'USD', 'EUR'],
  selectedCurrencyFrom: 'USD',
  selectedCurrencyTo: 'EUR',
  loading: false,
  error: null,
  exchangeRate: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXCHANGE_RATE: {
      return {
        ...state,
        exchangeRate: action.payload,
        loading: false,
      }
    }
    case SET_CURRENCY_FROM: {
      return {
        ...state,
        selectedCurrencyFrom: action.payload,
      }
    }
    case SET_CURRENCY_TO: {
      return {
        ...state,
        selectedCurrencyTo: action.payload,
      }
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default reducer
