import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'

// redux store chrome extension dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// end of redux store chrome extension dev tool

// persisting state through refreshes
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()
// end of persisting state through refreshes

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
