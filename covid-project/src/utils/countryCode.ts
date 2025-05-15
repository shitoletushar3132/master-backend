import type { CountryCode } from "./types";

export const countryCode = (countryData: any[]): CountryCode[] => {
  const codes = countryData
    .filter(
      (country) =>
        typeof country.cioc === "string" &&
        country.name &&
        typeof country.name.common === "string" &&
        country.name.common.trim() !== ""
    )
    .map((country: any) => ({
      code: country.cioc as string,
      country: country.name.common as string,
    }));

  return codes;
};
