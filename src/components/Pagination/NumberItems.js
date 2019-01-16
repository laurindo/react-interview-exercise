import React from 'react';

export default ({ index, currentPage, page, handleClick }) => {
  return (
    <li
      key={index}
      className={`page-item${
        currentPage === page ? " active" : ""
      }`}
    >
      <a
        className="page-link"
        href="#"
        onClick={e => handleClick(page, e)}>
          { page }
      </a>
    </li>
  );
};
