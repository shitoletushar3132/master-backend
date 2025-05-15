import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { getCountries, getHistoricalData } from "./services/api";
import { dataFormatter } from "./utils/dataFormatter";
import type { CountryCode, CovidData, StatsData } from "./utils/types";
import StatCard from "./components/StatCard";
import { countryCode } from "./utils/countryCode";

function App() {
  const [covidData, setCovidData] = useState<CovidData>();
  const [codes, setCodes] = useState<CountryCode[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("usa");
  const [statsData, setStatsData] = useState<StatsData>({
    cases: null,
    deaths: null,
    recovered: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [data1, data2] = await Promise.all([
          getHistoricalData(selectedCountry),
          getCountries(),
        ]);
        setCovidData(data1);
        const code = countryCode(data2);
        setCodes(code);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, [selectedCountry]);

  useEffect(() => {
    if (covidData) {
      const formattedStats = dataFormatter(covidData);
      setStatsData(formattedStats);
    }
  }, [covidData]);

  return (
    <div className="min-h-screen bg-sky-100 flex justify-center">
      <div className="w-full max-w-4xl  rounded-xl  p-8">
        <h1 className="text-2xl font-bold text-center text-sky-800 mb-6">
          COVID-19 and Population Dashboard
        </h1>

        <div className="mb-8">
          <SearchBar
            countries={codes}
            selected={selectedCountry}
            setSelected={setSelectedCountry}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {statsData.cases && (
            <StatCard
              title="Total Cases"
              color="bg-purple-500"
              value={statsData.cases}
              percentage="0.2%"
            />
          )}

          {statsData.deaths && (
            <StatCard
              title="Total Deaths"
              color="bg-red-500"
              value={statsData.deaths}
              percentage="0.1%"
            />
          )}

          {statsData.recovered && (
            <StatCard
              title="Recovered"
              color="bg-green-500"
              value={statsData.recovered}
              percentage="0.7%"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
