import searchWord from "./searchWord.js"
import {combineReducers} from "redux"
import favorites from "./favorites.js"
import getJobs from "./jobs.js"

const allReducers = combineReducers ({
  searchWord,
  favorites,
  getJobs
})

export default allReducers