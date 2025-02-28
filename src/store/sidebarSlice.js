import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expanded: true, // Sidebar is expanded by default
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.expanded = !state.expanded;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
