import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {combineReducers, configureStore, createReducer} from '@reduxjs/toolkit';

import {getForecast, setForecast} from '@src/redux/actions/forecast';
import {selectedCityState as initialSelectedCityState} from '@src/redux/reducers/selectedCity';
import {forecastState as inititalForecastState} from '@src/redux/reducers/forecast';

import {ForecastResponse} from '@src/types/forecast';

import Home from '@src/pages/home';

const mockGetForecast = jest.fn();
const mockSetForecast = jest.fn();

const mockReducers = ({
  selectedCityState,
  forecastState,
  mockGetForecastPayload,
}: {
  selectedCityState: String;
  forecastState: ForecastResponse;
  mockGetForecastPayload?: ForecastResponse;
}) => {
  const selectedCityReducer = createReducer(selectedCityState, () => {});

  const forecastReducer = createReducer(forecastState, builder => {
    builder.addCase(getForecast, (state, {payload}) => {
      mockGetForecast(payload);
      return {...state, ...mockGetForecastPayload};
    });
    builder.addCase(setForecast, (state, {payload}) => {
      mockSetForecast(payload);
      return {...state, ...payload};
    });
  });

  const rootReducer = combineReducers({
    selectedCityReducer,
    forecastReducer,
  });

  return configureStore({
    reducer: rootReducer,
  });
};

const component = ({
  selectedCityState,
  forecastState,
  mockGetForecastPayload,
}: {
  selectedCityState: string;
  forecastState: ForecastResponse;
  mockGetForecastPayload?: ForecastResponse;
}) => (
  <Provider
    store={mockReducers({
      selectedCityState,
      forecastState,
      mockGetForecastPayload,
    })}>
    <Home />
  </Provider>
);

const mockForecast = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1711929600,
      main: {
        temp: 9.78,
        feels_like: 8.37,
        temp_min: 8.97,
        temp_max: 9.78,
        pressure: 989,
        sea_level: 989,
        grnd_level: 986,
        humidity: 89,
        temp_kf: 0.81,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.79,
        deg: 213,
        gust: 7,
      },
      visibility: 10000,
      pop: 0.61,
      rain: {
        '3h': 0.31,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-04-01 00:00:00',
    },
  ],
};

describe('Home', () => {
  it('rendered correctly', () => {
    const mockSelectedCity = 'London';

    const {getByTestId} = render(
      component({
        selectedCityState: mockSelectedCity,
        forecastState: mockForecast,
      }),
    );

    const searchText = getByTestId('searchText');
    expect(searchText.props.children).toEqual(mockSelectedCity);

    const weatherInfoMainText = getByTestId('weather-info-main-text');
    expect(weatherInfoMainText.props.children).toEqual(
      mockForecast.list[0].weather[0].main,
    );

    const weatherInfoDescriptionText = getByTestId('weather-info-desc-text');
    expect(weatherInfoDescriptionText.props.children).toEqual(
      mockForecast.list[0].weather[0].description,
    );
  });

  it('fetch getForecast during mounting', () => {
    const {getByTestId} = render(
      component({
        selectedCityState: initialSelectedCityState,
        forecastState: inititalForecastState,
      }),
    );

    expect(mockGetForecast).toBeCalledWith({city: initialSelectedCityState});
  });
});
