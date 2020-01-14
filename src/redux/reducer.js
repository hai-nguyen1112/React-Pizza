import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  pizzas: {
    pizzas: [],
    isLoadingPizzas: false,
    loadPizzasError: null
  }
}

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

// start of FETCH PIZZAS
const fetchPizzasStart = (state, action) => {
  return updateObject(state, {
    pizzas: action.pizzas,
    isLoadingPizzas: action.isLoadingPizzas,
    loadPizzasError: action.loadPizzasError
  })
}

const fetchPizzasSuccess = (state, action) => {
  return updateObject(state, {
    pizzas: action.pizzas,
    isLoadingPizzas: action.isLoadingPizzas,
    loadPizzasError: action.loadPizzasError
  })
}

const fetchPizzasFail = (state, action) => {
  return updateObject(state, {
    pizzas: action.pizzas,
    isLoadingPizzas: action.isLoadingPizzas,
    loadPizzasError: action.loadPizzasError
  })
}
const pizzasReducer = (state = initialState.pizzas, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PIZZAS_START: return fetchPizzasStart(state, action)
    case actionTypes.FETCH_PIZZAS_SUCCESS: return fetchPizzasSuccess(state, action)
    case actionTypes.FETCH_PIZZAS_FAIL: return fetchPizzasFail(state, action)
    default: return state
  }
}
// end of FETCH PIZZAS

const appReducers = combineReducers({
  pizzas: pizzasReducer
})

const rootReducer = (state, action) => {
  return appReducers(state, action)
}

export default rootReducer
