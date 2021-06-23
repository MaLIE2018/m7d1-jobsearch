import searchWord from "./searchWord.js"
import {combineReducers} from "redux"
import favorites from "./favorites.js"

const allReducers = combineReducers ({
  searchWord,
  favorites
})

export default allReducers