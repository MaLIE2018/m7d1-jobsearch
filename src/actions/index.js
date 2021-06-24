import axios from "axios"


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


export const getJobs = (offset, searchWord) =>{
  return (async (dispatch, getState) =>{
    try {
      dispatch({type:"IS_LOADING"})
      const res = await fetch("https://fake-careers.herokuapp.com?search=" +
      searchWord +
      "&offset=" +
      offset)
      if(res.ok){
          
          const data = await res.json()
          console.log('data:', data)
          dispatch({type:"ADD_JOBS", payload: data})
          dispatch({type:"IS_LOADING"})
        }else{
          dispatch({type:"HAS_ERROR"})
        }
      } catch (error) {
        dispatch({type:"HAS_ERROR"})
        dispatch({type:"IS_LOADING"})
      }
  })
}
