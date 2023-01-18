import { useCountries } from '../../hooks/useCountries.js';
// import Controls from '../Controls/Controls.js';
import Country from '../Country/Country.js';
import { useState } from 'react';
import Controls from '../Controls/Controls.js';

export default function Main() {
  const { countries, error } = useCountries();
  const [continent, setContinent] = useState('all');

  // const continents = [...new Set(countries.map(({ continent }) => continent))];
  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  return (
    <main>
      <Controls {...{ setContinent, countries }} />
      <p>{error}</p>
      {/* <div className="filter">
        <select onChange={(e) => setContinent(e.target.value)}>
          <option value="all">all</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select> */}
      {/* </div> */}
      {filtered.map((country) => (
        <Country key={country.id} {...country} />
      ))}
    </main>
  );
}
