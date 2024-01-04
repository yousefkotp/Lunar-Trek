import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";

const store = configureStore({
	reducer: {
		data: dataReducer,
	},
});

export default store;
