export type SearchCity = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  timezone: string;
  population: number;
  postcodes?: string[];
  country: string;
  admin1: string;
  admin3?: string;
  admin4?: string;
};

export type GeocodingSchema = {
  results: SearchCity[];
};
