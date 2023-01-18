import { useEffect, useState } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getCountries();
      console.log(resp);
      setCountries(resp);
    };
    fetchData();
  }, []);
  return countries;
}
