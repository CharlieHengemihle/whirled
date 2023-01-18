import { useCountries } from '../../hooks/useCountries.js';
import Country from '../Country/Country.js';

export default function Main() {
  const countries = useCountries();

  return (
    <main>
      {countries.map((country) => (
        <Country key={country.id} {...country} />
      ))}
    </main>
  );
}
