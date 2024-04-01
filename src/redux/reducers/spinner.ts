import {createReducer} from '@reduxjs/toolkit';

import {hideSpinner, resetSpinner, showSpinner} from '../actions/spinner';

export const spinnerState: {count: number} = {count: 0};

const spinnerReducer = createReducer(spinnerState, builder => {
  builder.addCase(showSpinner, state => {
    return {...state, count: state.count + 1};
  });
  builder.addCase(hideSpinner, state => {
    const spinnerCount = state.count > 0 ? state.count - 1 : 0;
    return {...state, count: spinnerCount};
  });
  builder.addCase(resetSpinner, state => {
    return {...state, count: 0};
  });
});

export default spinnerReducer;
