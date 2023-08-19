import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Or choose another storage mechanism
import cartReducer from "./cartSlice"; // Import your cart reducer
const persistConfig = {
    key: "root", // Change this key if you have multiple persisted reducers
    storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const appStore = configureStore({
    reducer: {
        cart: persistedReducer,
        // Add other reducers here if needed
    },
});

export const persistor = persistStore(appStore);