import {call, put, takeLatest} from 'redux-saga/effects';
import Config from 'react-native-config';

import endpoints from '@src/constants/endpoint';

import {ForecastRequest, ForecastResponse} from '@src/types/forecast';

import {getForecast, setForecast} from '../actions/forecast';

import api from './api/api';

export function* fetchForecast({payload}: {payload: ForecastRequest}): any {
  const {city} = payload;
  const apiKey = `${Config.API_KEY}`;
  const path = `${endpoints.FORECAST}?q=${city}&units=metric&appid=${apiKey}`;
  const resp: {data: ForecastResponse} = yield call(api, {path, method: 'GET'});

  if (resp.data?.cod === '200') {
    yield put(setForecast(resp.data));
  }
}

export default function* forecastSaga() {
  yield takeLatest(getForecast, fetchForecast);
}
