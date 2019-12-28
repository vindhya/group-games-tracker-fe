import { STATS } from '../actions/actions.types';
import { graphable, orderDesc } from '../../utils/dataManipulation';

const INITIAL_STATE = {
  isLoading: false,
  isFailure: false,
  total_wins: {},
  avalon: {},
  coup: {}
};

export const statsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case STATS.LOADING:
      return {
        ...state,
        isLoading: true,
        isFailure: false
      };
    case STATS.ERROR:
      return {
        ...state,
        isLoading: false,
        isFailure: true
      };
    case STATS.SET_AVALON_DATA:
      return {
        ...state,
        isLoading: false,
        isFailure: false,
        avalon: action.payload
      };
    case STATS.SET_COUP_DATA:
      return {
        ...state,
        isLoading: false,
        isFailure: false,
        coup: action.payload
      };
    case STATS.SET_WIN_DATA:
      return {
        ...state,
        isLoading: false,
        isFailure: false,
        total_wins: orderDesc(graphable(action.payload))
      };
    default:
      return state;
  }
};
