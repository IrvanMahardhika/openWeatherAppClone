import {call, put} from 'redux-saga/effects';
import {Method} from 'axios';

import request from '@src/utils/request';

import {hideSpinner, showSpinner} from '../../actions/spinner';

export default function* apiSaga(apiConfig: {
  path: string;
  method: Method;
}): Generator<any, any, Promise<any>> {
  const showLoader = () => put(showSpinner());
  const hideLoader = () => put(hideSpinner());

  try {
    yield showLoader();
    const response = yield call(request, apiConfig);
    return response;
  } catch (error) {
    yield hideLoader();
  } finally {
    yield hideLoader();
  }
}
