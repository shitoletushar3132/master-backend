import { formatNumberUK } from "./formatNumberIndian";
import type { CovidData } from "./types";

export const dataFormatter = (data: CovidData) => {
  console.log(data);
  const total = Object.values(data?.timeline?.cases).reduce(
    (sum, dailycount) => sum + dailycount,
    0
  );

  const totalDeath = Object.values(data.timeline.deaths).reduce(
    (total, count) => total + count,
    0
  );

  const totalRecovered = Object.values(data.timeline.recovered).reduce(
    (total, count) => total + count,
    0
  );

  return {
    cases: formatNumberUK(total, true),
    deaths: formatNumberUK(totalDeath, true),
    recovered: formatNumberUK(totalRecovered, true),
  };
};
