import { createStore, applyMiddleware, compose } from 'redux'
import { config } from '../config'

// middlewares
import thunkMiddleware from 'redux-thunk'

// Import custom components
import reducers from '../reducers/index'

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    return undefined
  }
}

/**
 * Create a Redux store that holds the app state.
 */
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),

    // For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.devToolsExtension
      ? window.devToolsExtension()
      : function (f) {
          return f
        },
  ),
)

// Only log to the console in dev mode
// const environment = config.get('environment') // TODO FIX THIS
// console.log('environment: ', environment);
// const draw = () => environment === 'dev' ? console.log(store.getState()) : store.getState()
const draw = () => console.log(store.getState())
store.subscribe(draw)

const unsubscribe = store.subscribe(() => {
  const state = store.getState()
  saveToLocalStorage(state)
})

export default store
