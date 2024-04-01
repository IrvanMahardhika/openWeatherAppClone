import {createReducer} from '@reduxjs/toolkit';

import {setSelectedCity} from '../actions/selectedCity';

export const selectedCityState: string = 'London';

const selectedCityReducer = createReducer(selectedCityState, builder => {
  builder.addCase(setSelectedCity, (_, {payload}) => {
    return payload;
  });
});

export default selectedCityReducer;
