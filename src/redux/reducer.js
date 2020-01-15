import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  pizzas: {
    pizzas: [],
    isLoadingPizzas: false,
    loadPizzasError: null
  },
  pizzaEditForm: {
    id: null,
    topping: "",
    size: "",
    vegetarian: null
  }
}

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

// start of FETCH PIZZAS reducer
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
// end of FETCH PIZZAS reducer

// start of PIZZA EDIT FORM reducer
const onPizzaEditFormChange = (state, action) => {
  return updateObject(state, action.editedData)
}

const pizzaEditFormReducer = (state = initialState.pizzaEditForm, action) => {
  switch (action.type) {
    case actionTypes.PIZZA_EDIT_FORM_WAS_CHANGED: return onPizzaEditFormChange(state, action)
    default: return state
  }
}
// end of PIZZA EDIT FORM reducer

const appReducers = combineReducers({
  pizzas: pizzasReducer,
  pizzaEditForm: pizzaEditFormReducer
})

const rootReducer = (state, action) => {
  return appReducers(state, action)
}

export default rootReducer
