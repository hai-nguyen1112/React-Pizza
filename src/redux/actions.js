import * as actionTypes from './actionTypes'
import axios from '../utils/axiosInstance'

// start of FETCH PIZZAS
export const fetchPizzas = () => {
  return dispatch => {
    dispatch(fetchPizzasStart())

    axios.get('pizzas')
    .then(response => dispatch(fetchPizzasSuccess(response.data)))
    .catch(error => dispatch(fetchPizzasFail(error)))
  }
}

const fetchPizzasStart = () => {
  return {
    type: actionTypes.FETCH_PIZZAS_START,
    pizzas: [],
    isLoadingPizzas: true,
    loadPizzasError: null
  }
}

const fetchPizzasSuccess = pizzas => {
  return {
    type: actionTypes.FETCH_PIZZAS_SUCCESS,
    pizzas: pizzas,
    isLoadingPizzas: false,
    loadPizzasError: null
  }
}

const fetchPizzasFail = error => {
  return {
    type: actionTypes.FETCH_PIZZAS_FAIL,
    pizzas: [],
    isLoadingPizzas: false,
    loadPizzasError: error
  }
}
// end of FETCH PIZZAS
