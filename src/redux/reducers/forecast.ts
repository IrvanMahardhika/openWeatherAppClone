import {createReducer} from '@reduxjs/toolkit';

import {ForecastResponse} from '@src/types/forecast';

import {setForecast} from '../actions/forecast';

export const forecastState: ForecastResponse = {
  list: [],
};

const forecastReducer = createReducer(forecastState, builder => {
  builder.addCase(setForecast, (state, {payload}) => {
    return {...state, ...payload};
  });
});

export default forecastReducer;
