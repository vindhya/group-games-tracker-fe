import { STATS } from './actions.types';

export const setAvalonData = (gameData = {}) => ({
  type: STATS.SET_AVALON_DATA,
  payload: gameData
});

export const setCoupData = (gameData = {}) => ({
  type: STATS.SET_COUP_DATA,
  payload: gameData
});

export const setWinData = (winData = {}) => ({
  type: STATS.SET_WIN_DATA,
  payload: winData
});

export const setLoading = () => ({
  type: STATS.LOADING
});

export const setError = () => ({
  type: STATS.ERROR
});

export const fetchWinsThunk = () => dispatch => {
  dispatch(setLoading());
  return fetch('/games')
    .then(res => res.json())
    .then(data => dispatch(setWinData(data.data)))
    .catch(err => dispatch(setError()));
};

export const fetchAvalonStatsThunk = () => dispatch => {
  dispatch(setLoading());
  return fetch('/games/avalon')
    .then(res => res.json())
    .then(data => dispatch(setAvalonData(data.data)))
    .catch(err => dispatch(setError()));
};

export const fetchCoupStatsThunk = () => dispatch => {
  dispatch(setLoading());
  return fetch('/games/coup')
    .then(res => res.json())
    .then(data => dispatch(setCoupData(data.data)))
    .catch(err => dispatch(setError()));
};
