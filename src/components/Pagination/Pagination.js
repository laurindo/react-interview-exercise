import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Arrow from './Arrow';
import NumberItems from './NumberItems';
import styles from './styles/Pagination.css';

export default class Pagination extends Component {
  componentDidMount() {
    const { showPageItemsNumber, friends } = this.props;
    showPageItemsNumber(friends);
  }

  render() {
    const { pageListNumber, pagination, currentPageNumber, moveLeft, moveRight, moveByNumber } = this.props;

    return (
      <nav className={styles.containerPagination} aria-label="Friends">
        <ul className="pagination">
          <Arrow
            label="Previous"
            aria="&laquo;"
            pagination={pagination}
            handleClick={moveLeft} />

          {
            pageListNumber.map((pageNumber, index) => {
              return (
                <NumberItems
                  key={index}
                  index={index}
                  currentPage={currentPageNumber}
                  page={index+1}
                  pagination={pagination}
                  handleClick={moveByNumber} />
              );
            })
          }

          <Arrow
            label="Next"
            aria="&raquo;"
            pagination={pagination}
            handleClick={moveRight} />
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  friends: PropTypes.array.isRequired,
  moveLeft: PropTypes.func,
  moveRight: PropTypes.func
};
