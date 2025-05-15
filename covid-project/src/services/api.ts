import axios from "axios";

interface Country {
  name: {
    common: string;
    official: string;
  };
  cca2: string; 
  cca3: string;
  flags: {
    png: string;
    svg: string;
  };
}

export const getHistoricalData = async (countryCode: string): Promise<any> => {
  try {
    const response = await axios.get(
      `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=1500`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch COVID-19 data");
  }
};

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>(
      "https://restcountries.com/v3.1/all"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch country list");
  }
};
