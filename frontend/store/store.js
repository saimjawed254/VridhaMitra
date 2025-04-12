import { configureStore } from "@reduxjs/toolkit"

import logSlice from "./logSlice"

const logStore = configureStore({
    reducer:{log:logSlice.reducer}
})

export default logStore