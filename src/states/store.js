import {configureStore} from "@reduxjs/toolkit"
import indecReducer from "./reducers/index"
export default configureStore({
   reducer:{
    number: indecReducer
   }
},window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())


