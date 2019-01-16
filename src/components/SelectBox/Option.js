import React from 'react';

const Option = ({ label, value, index }) => {
  return (
    <option value={value} key={index}>{ label }</option>
  );
};

export default Option;
