import {configureStore} from "@reduxjs/toolkit"
import mainReducer from './redux/main'

const store = configureStore({
  reducer: {
    main: mainReducer,
  }
})

export default store