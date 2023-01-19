import { useEffect, useState } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const resp = await getCountries();
        setCountries(resp);
        setLoading(false);
      } catch (e) {
        setError(`Aww beans, it's borked!`);
      }
    };
    fetchData();
  }, []);
  return { countries, error, loading };
}
