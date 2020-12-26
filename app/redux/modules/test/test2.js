import {
  makeReducer,
  makeActions
} from '$RUTILS/reduxUtils'

// import { get } from '$UTILS/requestHandler'

export const GET_EMPLOYEE = 'GET_EMPLOYEE'
export const CUSTOM_ACTION = 'CUSTOM_ACTION'

const {
  defaultAction: getEmployee,
  successAction: getEmployeeSuccess,
  failureAction: getEmployeeFailure,
} = makeActions(GET_EMPLOYEE)

// Async Action Creators Starts
export function fetchEmployee() {
  return async (dispatch) => {
    dispatch(getEmployee())

    try {
      // const response = await get({
      //   path    : 'some/path',
      //   payload : {},
      //   dispatch
      // })

      const body = await fetch('https://backendapi.turing.com/departments')
      const response = await body.json()

      dispatch(getEmployeeSuccess(response))
    } catch (error){
      dispatch(getEmployeeFailure(error.message))

      throw error.message
    }
  }
}
// Async Action Creators Ends

export const initialState = {
  isFetching : false,
  isAuthed   : false,
  error      : '',
  count      : 0
}

const employee = makeReducer({
  actionName: GET_EMPLOYEE,
  initialState,
  additionalActions(state) {
    return {
      CUSTOM_ACTION : () => ({
        ...state,
        count : state.count + 1
      })
    }
  }
})

export default employee
export {
  getEmployee,
  getEmployeeSuccess,
  getEmployeeFailure
}

