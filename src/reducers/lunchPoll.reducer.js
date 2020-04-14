import { ADD_USER } from '../constant/actionTypes'

const INITIAL_STATE = {
  user: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        user: action.value,
      })

    default:
      return { ...state }
  }
}
