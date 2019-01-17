import React from 'react';

export default ({ index, currentPage, page, handleClick, pagination }) => {
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
        onClick={e => {
          return handleClick(pagination, parseInt(e.target.innerHTML));
        }}>
          { page }
      </a>
    </li>
  );
};
