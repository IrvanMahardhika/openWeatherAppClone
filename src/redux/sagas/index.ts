import {fork} from 'redux-saga/effects';

import forecastSaga from './forecast';

export default function* () {
  yield fork(forecastSaga);
}
