const searchWordReducer = (state = "Software", action) => {
  switch(action.type) {
    case "SET":
      return state = action.payload
    default:
      return state
  }
}

export default searchWordReducer