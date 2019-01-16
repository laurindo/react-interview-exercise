import React from 'react';
import styles from './styles/selectbox.css';
import Option from './Option';

export default ({ name, id, title, options }) => {
  return (
    <div className={styles.containerSelectBox}>
      <select name={name} id={id}>
        <option className="readonly" readOnly="true">{ title }</option>
        {
          options.map((option, index) => {
            return (
              <Option
                key={index}
                label={option.label}
                value={option.value}
                index={index} />
            );
          })
        }
      </select>
    </div>
  );
};