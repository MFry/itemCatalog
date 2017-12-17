import React from 'react';
import PropTypes from 'prop-types';


const itemPlaceHolder = { items: [{ name: 'Stick', category: 'Hockey' }, { name: 'Googles', category: 'Snowboarding' }] };
const Items = (props) => {
  const { items } = props;
  let i = 0;
  return (
    <div className="collection">
      {
        items.map(item => (
          <a href="#!" key={i++} className="collection-item">{item.name} ({item.category})</a>
        ))
        }
    </div>
  );
};
Items.defaultProps = {
  items: [],
};
Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.string)),
};

export default () => Items(itemPlaceHolder);
