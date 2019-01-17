import React, { Component } from 'react';
import styles from './styles/selectbox.css';
import Option from './Option';

export default class SelectBox extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange (event) {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  }

  render() {
    const { name, id, title, options } = this.props;
    return (
      <div className={styles.containerSelectBox}>
        <select
          value={this.props.value}
          name={name}
          id={id}
          onChange={this.handleChange}>
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
  }
}
