import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  pizzas: {
    pizzas: [],
    isLoadingPizzas: false,
    loadPizzasError: null,
    isEditingPizza: false,
    editPizzaError: null,
    isAddingPizza: false,
    addPizzaError: null
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

const editPizzaStart = (state, action) => {
  return updateObject(state, {
    isEditingPizza: action.isEditingPizza,
    editPizzaError: action.editPizzaError
  })
}

const editPizzaSuccess = (state, action) => {
  let currentPizzas = JSON.parse(JSON.stringify(state.pizzas))

  let newPizzas = currentPizzas.map(pizza => {
    if (pizza.id === action.editedPizza.id) {
      return action.editedPizza
    } else {
      return pizza
    }
  })

  return updateObject(state, {
    pizzas: newPizzas,
    isEditingPizza: action.isEditingPizza,
    editPizzaError: action.editPizzaError
  })
}

const editPizzaFail = (state, action) => {
  return updateObject(state, {
    isEditingPizza: action.isEditingPizza,
    editPizzaError: action.editPizzaError
  })
}

const addPizzaStart = (state, action) => {
  return updateObject(state, {
    isAddingPizza: action.isAddingPizza,
    addPizzaError: action.addPizzaError
  })
}

const addPizzaSuccess = (state, action) => {
  let pizzas = JSON.parse(JSON.stringify(state.pizzas))
  pizzas.push(action.addedPizza)

  return updateObject(state, {
    isAddingPizza: action.isAddingPizza,
    addPizzaError: action.addPizzaError,
    pizzas: pizzas
  })
}

const addPizzaFail = (state, action) => {
  return updateObject(state, {
    isAddingPizza: action.isAddingPizza,
    addPizzaError: action.addPizzaError
  })
}

const pizzasReducer = (state = initialState.pizzas, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PIZZAS_START: return fetchPizzasStart(state, action)
    case actionTypes.FETCH_PIZZAS_SUCCESS: return fetchPizzasSuccess(state, action)
    case actionTypes.FETCH_PIZZAS_FAIL: return fetchPizzasFail(state, action)
    case actionTypes.EDIT_PIZZA_START: return editPizzaStart(state, action)
    case actionTypes.EDIT_PIZZA_SUCCESS: return editPizzaSuccess(state, action)
    case actionTypes.EDIT_PIZZA_FAIL: return editPizzaFail(state, action)
    case actionTypes.ADD_PIZZA_START: return addPizzaStart(state, action)
    case actionTypes.ADD_PIZZA_SUCCESS: return addPizzaSuccess(state, action)
    case actionTypes.ADD_PIZZA_FAIL: return addPizzaFail(state, action)
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
