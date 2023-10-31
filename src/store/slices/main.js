import {createSlice} from '@reduxjs/toolkit';

export const main = createSlice({
  name: 'main',
  initialState: {
    getMe: {},
    language: 'uz',
    info: {},
    login: false,
    token: '',
    u_prefix: '',
    u_prefixO: '',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setMe: (state, action) => {
      state.getMe = action.payload;
    },
    setLogins: (state, action) => {
      state.login = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setU_prefix: (state, action) => {
      state.u_prefix = action.payload;
    },
    setU_prefixO: (state, action) => {
      state.u_prefixO = action.payload;
    },
  },
});
