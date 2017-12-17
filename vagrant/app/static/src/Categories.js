import React from 'react';
import PropTypes from 'prop-types';

const catPlacehodler = { categories: ['Soccer', 'Baseball', 'Basketball', 'Frisbee', 'Snowboarding', 'Rock Climbing', 'Foosball', 'Skating', 'Hockey'] };

const CategorieList = (props) => {
  const { categories } = props;
  let i = 0;
  return (
    <div className="collection">
      {
        categories.map(category => (
          <a href="#!" key={i++} className="collection-item">{category}</a>
        ))
    }
    </div>
  );
};
CategorieList.defaultProps = {
  categories: [],
};
CategorieList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default () => CategorieList(catPlacehodler);
