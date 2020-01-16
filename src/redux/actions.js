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

// start of PIZZA EDIT FORM
export const onPizzaEditFormChange = (...editedData) => {
  let dataToEdit = {}

  editedData.forEach(data => {
    dataToEdit[data[0]] = data[1]
  })

  return {
    type: actionTypes.PIZZA_EDIT_FORM_WAS_CHANGED,
    editedData: dataToEdit
  }
}
// end of PIZZA EDIT FORM

// start of EDIT PIZZA
export const editPizza = (dataToEdit, id) => {
  return dispatch => {
    dispatch(editPizzaStart())

    axios({
      url: `pizzas/${id}`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: {
        ...dataToEdit
      }
    })
    .then(response => dispatch(editPizzaSuccess(response.data)))
    .catch(error => dispatch(editPizzaFail(error)))
  }
}

const editPizzaStart = () => {
  return {
    type: actionTypes.EDIT_PIZZA_START,
    isEditingPizza: true,
    editPizzaError: null
  }
}

const editPizzaSuccess = editedPizza => {
  return {
    type: actionTypes.EDIT_PIZZA_SUCCESS,
    editedPizza: editedPizza,
    isEditingPizza: false,
    editPizzaError: null
  }
}

const editPizzaFail = error => {
  return {
    type: actionTypes.EDIT_PIZZA_FAIL,
    isEditingPizza: false,
    editPizzaError: error
  }
}
// end of EDIT PIZZA

// start of ADD PIZZA
export const addPizza = newPizza => {
  return dispatch => {
    dispatch(addPizzaStart())

    axios({
      url: 'pizzas',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: {
        ...newPizza
      }
    })
    .then(response => dispatch(addPizzaSuccess(response.data)))
    .catch(error => dispatch(addPizzaFail(error)))
  }
}

const addPizzaStart = () => {
  return {
    type: actionTypes.ADD_PIZZA_START,
    isAddingPizza: true,
    addPizzaError: null
  }
}

const addPizzaSuccess = addedPizza => {
  return {
    type: actionTypes.ADD_PIZZA_SUCCESS,
    addedPizza: addedPizza,
    isAddingPizza: false,
    addPizzaError: null
  }
}

const addPizzaFail = error => {
  return {
    type: actionTypes.ADD_PIZZA_FAIL,
    isAddingPizza: false,
    addPizzaError: error
  }
}
// end of ADD PIZZA
