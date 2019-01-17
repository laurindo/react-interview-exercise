import React from 'react';
import { GENDER_NAME } from '../../constants/General';

export default ({ gender }) => {
  const genderSelected = (gender === GENDER_NAME.male) ? "fa-mars blue" : "fa-venus pink";
  return <i className={`fa ${genderSelected}`} />;
};
