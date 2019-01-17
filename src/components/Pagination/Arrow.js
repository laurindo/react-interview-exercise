import React from 'react';

export default ({ index, label, aria, pagination, handleClick }) => {
  return (
    <li key={index} className="page-item">
      <a
        className="page-link"
        href="#"
        aria-label={label}
        onClick={() => { handleClick(pagination) }}
      >
        <span aria-hidden="true">{aria}</span>
        <span className="sr-only">{ label }</span>
      </a>
    </li>
  );
};
