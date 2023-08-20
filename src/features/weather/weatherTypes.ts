export type WeatherResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: 0 | 1;
    time: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    apparent_temperature: string;
    weathercode: string;
    windspeed_10m: string;
    winddirection_10m: string;
    uv_index: string;
  };
  hourly: {
    time: number[];
    temperature_2m: number[];
    apparent_temperature: number[];
    weathercode: number[];
    windspeed_10m: number[];
    winddirection_10m: number[];
    uv_index: number[];
  };
  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_probability_max: string;
    windspeed_10m_max: string;
    winddirection_10m_dominant: string;
  };
  daily: {
    time: number[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
    windspeed_10m_max: number[];
    winddirection_10m_dominant: number[];
  };
};

export type Period = {
  name: string;
  timestamp: number;
};
