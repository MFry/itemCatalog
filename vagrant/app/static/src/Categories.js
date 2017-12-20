import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItem } from './CatalogActions';

const catPlacehodler = { categories: ['Soccer', 'Baseball', 'Basketball', 'Frisbee', 'Snowboarding', 'Rock Climbing', 'Foosball', 'Skating', 'Hockey'] };

const CategorieList = (props) => {
  const { categories } = { categories: ['Soccer', 'Baseball', 'Basketball', 'Frisbee', 'Snowboarding', 'Rock Climbing', 'Foosball', 'Skating', 'Hockey'] };
  let i = 0;
  return (
    <div className="collection">
      {
        categories.map(category => (
          <a href="#!" key={i++} onClick={() => { props.item(1); }} className="collection-item">{category}</a>
        ))
    }
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  item: id => dispatch(getItem(1)),
});
CategorieList.defaultProps = {
  categories: [],
};
CategorieList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default connect(null, mapDispatchToProps)(CategorieList);
