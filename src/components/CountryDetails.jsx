import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { id } = useParams();
  const country = countries.find((c) => c.alpha3Code === id);

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Population: {country.population}</p>
    </div>
  );
}

export default CountryDetails;
