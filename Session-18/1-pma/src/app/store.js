import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../slices/projectSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default store;
