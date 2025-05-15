// types.ts
export interface TimelineData {
  [date: string]: number;
}

export interface Timeline {
  cases: TimelineData;
  deaths: TimelineData;
  recovered: TimelineData;
}

export interface CovidData {
  country: string;
  province: string[];
  timeline: Timeline;
}

export interface StatsData {
  cases: string | null;
  deaths: string | null;
  recovered: string | null;
}

export interface CountryCode {
  code: string;
  country: string;
}
