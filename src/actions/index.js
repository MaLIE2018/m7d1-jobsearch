export const set = (searchWord) =>{
  return {
    type: "SET",
    payload: searchWord
  }
}

export const addFavorite = (fav) =>{
  return {
    type: "ADD_FAVORITE",
    payload: fav
  }
}

export const deleteFavorite = (i) =>{
  return {
    type: "REMOVE_FAVORITE",
    payload: i
  }
}