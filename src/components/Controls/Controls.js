import './Controls.css';

export default function Controls({ setContinent, countries }) {
  //   const countries = useCountries();

  const continents = [...new Set(countries.map(({ continent }) => continent))];

  return (
    <div className="filter">
      <select onChange={(e) => setContinent(e.target.value)}>
        <option value="all">all</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}
