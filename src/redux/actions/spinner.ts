import {createAction} from '@reduxjs/toolkit';

import {SPINNER_HIDE, SPINNER_RESET, SPINNER_SHOW} from './actionList';

export const showSpinner = createAction(SPINNER_SHOW);
export const hideSpinner = createAction(SPINNER_HIDE);
export const resetSpinner = createAction(SPINNER_RESET);
