const TOKEN_KEY = 'f636fb57-b47d-55af-9925-4f640c723802';
const ACCESS_TOKEN_KEY = '70bcd39e-ac4e-57f0-adfd-71f2914a71e5';
const REFRESH_TOKEN_KEY = '19bb5a94-f97e-57f8-8502-461e0b3bd6e9';

export const setRefreshToken = (value) => localStorage.setItem(REFRESH_TOKEN_KEY, value);
export const setAccessToken = (value) => localStorage.setItem(ACCESS_TOKEN_KEY, value);
export const setToken = (value) => localStorage.setItem(TOKEN_KEY, value);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const removeRefreshToken = () => localStorage.removeItem(REFRESH_TOKEN_KEY);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY);
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);
