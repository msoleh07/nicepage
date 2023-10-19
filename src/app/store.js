import { configureStore } from "@reduxjs/toolkit";
import openAllCatalog from "./openAllCatalog";

export const store = configureStore({
    reducer: {
        openAllCatalog
    }
})