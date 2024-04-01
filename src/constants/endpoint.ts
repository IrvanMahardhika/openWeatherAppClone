import Config from 'react-native-config';

const apiUrl = `${Config.API_URL}`;

const endpoints: Record<string, string> = {
  WEATHER: `${apiUrl}/weather`,
  FORECAST: `${apiUrl}/forecast`,
};

export default endpoints;
