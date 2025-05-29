import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../data/projects";
import { reports } from "../data/reports";

const initialState = {
  list: projects,
  reports: reports,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
