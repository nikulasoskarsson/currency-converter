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
  currencies: [
    'AED',
    'ARS',
    'AUD',
    'BGN',
    'BRL',
    'BSD',
    'CAD',
    'CHF',
    'CLP',
    'CNY',
    'COP',
    'CZK',
    'DKK',
    'DOP',
    'EGP',
    'EUR',
    'FJD',
    'GBP',
    'GTQ',
    'HKD',
    'HRK',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'ISK',
    'JPY',
    'KRW',
    'KZT',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PAB',
    'PEN',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'RON',
    'RUB',
    'SAR',
    'SEK',
    'SDG',
    'THB',
    'TRY',
    'TWD',
    'UAH',
    'USD',
    'UYU',
    'VND',
    'ZAR',
  ],
  selectedCurrencyFrom: 'USD',
  selectedCurrencyTo: 'EUR',
  loading: false,
  error: null,
  exchangeRate: null,
  amount: 1,
  fromFilterString: '',
  fromFilteredCurrencies: [],
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
        fromFilterString: '',
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
