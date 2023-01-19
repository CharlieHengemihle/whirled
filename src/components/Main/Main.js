import { useCountries } from '../../hooks/useCountries.js';
import Country from '../Country/Country.js';
import { useState } from 'react';
import Controls from '../Controls/Controls.js';
import './Main.css';

export default function Main() {
  const { countries, error, isLoading } = useCountries();
  const [continent, setContinent] = useState('all');

  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  if (isLoading && !error) {
    return (
      <div>
        <p className="warning">Loading...</p>
      </div>
    );
  }

  return (
    <main className="Main">
      <Controls {...{ setContinent, countries }} />
      {filtered.map((country) => (
        <Country key={country.id} {...country} />
      ))}
      <p className="warning">{error}</p>
    </main>
  );
}
