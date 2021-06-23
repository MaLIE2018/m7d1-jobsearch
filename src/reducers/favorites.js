const initialState = []

const favoriteReducer = (state =initialState, action) => {
      switch(action.type) {
        case "ADD_FAVORITE":
          return [...state, action.payload]
        case "REMOVE_FAVORITE":
          let newFavs = state.filter(f => f.id !== action.payload)
          return [...newFavs]
        default:
          return state
      }


}

export default favoriteReducer