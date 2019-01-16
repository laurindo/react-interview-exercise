import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={e => { e.preventDefault(); }}>
        {this.props.children}
      </form>
    );
  }
}
