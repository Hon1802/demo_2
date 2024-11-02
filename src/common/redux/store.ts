import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer' // Nhập reducer gốc của bạn ở đây

const store = configureStore({
  reducer: rootReducer
})

export default store
