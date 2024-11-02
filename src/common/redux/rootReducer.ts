import { combineReducers } from '@reduxjs/toolkit'
import someReducer from '../../page/homePage/common/homeSlice'
const rootReducer = combineReducers({
  some: someReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
