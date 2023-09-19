import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div>
      <ul className="list-group">
        {countries.map((country) => (
          <li key={country.alpha3Code} className="list-group-item">
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name} Flag`}
                className="mr-2"
              />
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
