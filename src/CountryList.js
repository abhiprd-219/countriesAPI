import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const CountryList = ({ searchTerm, regionFilter }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch countries from the API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  // Filter and search logic
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion = regionFilter
      ? country.region === regionFilter
      : true;
    return matchesSearch && matchesRegion;
  });

  if (loading) {
    return <p className="text-center text-xl font-semibold">Loading countries...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredCountries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;