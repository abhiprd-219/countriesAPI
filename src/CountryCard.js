import React from "react";

const CountryCard = ({ country }) => {
  return (
<div className="bg-white p-4 rounded-md shadow-lg shadow-black/50">
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>
      <p className="text-sm text-gray-600 mb-1">Region: {country.region}</p>
      <p className="text-sm text-gray-600 mb-1">Capital: {country.capital?.[0]}</p>
      <p className="text-sm text-gray-600">Population: {country.population.toLocaleString()}</p>
    </div>
  );
};

export default CountryCard;