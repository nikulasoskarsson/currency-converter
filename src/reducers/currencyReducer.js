import {
  GET_CURRENCIES,
  GET_EXCHANGE_RATE,
  SET_CURRENCY_FROM,
  SET_CURRENCY_TO,
  SET_AMOUNT,
  SWITCH_FROM_TO,
  FILTER_FROM,
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
  amount: 1,
  fromFilterString: '',
  fromFilteredCurrencies: ['AED', 'ARS', 'BGN', 'USD', 'EUR'],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXCHANGE_RATE: {
      return {
        ...state,
        exchangeRate: action.payload,
        loading: false,
        error: null,
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
    case SET_AMOUNT: {
      return {
        ...state,
        amount: action.payload,
      }
    }
    case SWITCH_FROM_TO: {
      return {
        ...state,
        selectedCurrencyFrom: state.selectedCurrencyTo,
        selectedCurrencyTo: state.selectedCurrencyFrom,
      }
    }
    case FILTER_FROM: {
      return {
        ...state,
        fromFilterString: action.payload,
        fromFilteredCurrencies: state.currencies.filter((currency) =>
          currency.toLowerCase().includes(action.payload.toLowerCase())
        ),
      }
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SET_ERROR: {
      console.log('set error reducer running')
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    default:
      return state
  }
}

export default reducer
