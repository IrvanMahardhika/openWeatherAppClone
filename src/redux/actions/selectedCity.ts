import {createAction} from '@reduxjs/toolkit';

import {SET_SELECTED_CITY} from './actionList';

export const setSelectedCity = createAction<string>(SET_SELECTED_CITY);
