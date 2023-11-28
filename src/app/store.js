import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {

};

export default configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        })
})