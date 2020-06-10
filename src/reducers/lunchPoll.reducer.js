import {
  ADD_USER,
  COMPANY_SIGNUP_INFO,
  SET_AUTH,
} from '../constants/actionTypes'

const INITIAL_STATE = {
  auth: false,
  authData: {},
  signup: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        authData: action.value,
      })
    case COMPANY_SIGNUP_INFO:
      return Object.assign({}, state, {
        signup: action.value,
      })
    case SET_AUTH:
      return Object.assign({}, state, {
        auth: action.value,
      })

    default:
      return { ...state }
  }
}
