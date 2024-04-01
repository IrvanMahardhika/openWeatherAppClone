import {createAction} from '@reduxjs/toolkit';

import {ForecastRequest, ForecastResponse} from '@src/types/forecast';

import {GET_FORECAST, SET_FORECAST} from './actionList';

export const getForecast = createAction<ForecastRequest>(GET_FORECAST);

export const setForecast = createAction<ForecastResponse>(SET_FORECAST);
