const initialState = {
  favorites: []
}

const favoriteReducer = (state =initialState, action) => {
      switch(action.type) {
        case "ADD_FAVORITE":
          return {...state, favorites: [...state.favorites, action.payload]}
        case "REMOVE_FAVORITE":
          let newFavs = state.favorites.filter(f => f.id !== action.payload)
          return {...state, favorites: newFavs}
        default:
          return state
      }


}

export default favoriteReducer