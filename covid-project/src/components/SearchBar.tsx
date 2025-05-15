import { useEffect, useRef, useState } from "react";
import type { CountryCode } from "../utils/types";

interface SearchBarProps {
  countries: CountryCode[];
  selected: string | null;
  setSelected: (code: string) => void;
}

const SearchBar = ({ countries, selected, setSelected }: SearchBarProps) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter countries by name based on search text
  const filteredCountries = countries.filter((country) =>
    country.country.toLowerCase().includes(search.toLowerCase())
  );

  // When user selects a country, save code and display name
  const onSelect = (country: CountryCode) => {
    setSelected(country.code);
    setSearch(country.country);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative w-md bg-white rounded-3xl shadow-2xl">
      <input
        type="text"
        placeholder="Select or search country..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setIsOpen(true);
        }}
        onClick={() => setIsOpen(true)}
        className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 max-h-48 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg">
          {filteredCountries.length === 0 && (
            <li className="p-2 text-gray-500">No results found</li>
          )}
          {filteredCountries.map((country) => (
            <li
              key={country.code}
              onClick={() => onSelect(country)}
              onMouseDown={(e) => e.preventDefault()} // prevent input blur
              className={`cursor-pointer px-4 py-2 hover:bg-blue-500 hover:text-white ${
                country.code === selected ? "bg-blue-100" : ""
              }`}
            >
              {country.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
