import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice";

const portfolioStore = configureStore({
    reducer: {
        portfolio: portfolioReducer,
    }
});

export default portfolioStore;