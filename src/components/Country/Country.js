import React from 'react';
import './Country.css';

export default function Country({ name, iso2 }) {
  return (
    <div className="country">
      <div>{name}</div>
      {/* <div>{continent}</div> */}
      <div>
        <img
          src={`https://flagcdn.com/160x120/${iso2.toLowerCase()}.png`}
          width="160"
          height="120"
          alt={name}
        />
      </div>
    </div>
  );
}
