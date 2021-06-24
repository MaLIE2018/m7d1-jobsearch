const initialState = {
  pages: [],
  error: false,
  errorMessage: "",
  loading: false, 
  next: 0,
  previous: 0
}


const jobsReducers = (state =initialState, action) => {
      switch (action.type) {
        case "ADD_JOBS":
          return {...state, 
            pages: [...state.pages, action.payload.jobs], 
            error: false, 
            next: action.payload.navigation?.next?.split("=")[2],
            previous: state.next
          }
        case "HAS_ERROR":
          return {...state, error:true, loading:false}
        case "IS_LOADING":
          return {...state, error: false, loading: !state.loading}
        default:
          return state
      }
}

export default jobsReducers
