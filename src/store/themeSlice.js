import { createSlice } from '@reduxjs/toolkit';

// Initial state should be a string ('light' or 'dark')
const initialState = 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Toggle the theme between 'light' and 'dark'
      return state === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
