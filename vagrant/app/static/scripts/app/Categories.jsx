import React from 'react';
import { connect } from 'react-redux';
import Entry from './Entry';

let Categories = props => {
    return (
        <div className="col-md-4">
            {props.categories.map(category => {
                return Entry({ ...category, key: 'd' + category.id });
            })}
        </div>
    );
};
const mapStateToCategoryBody = state => ({
    categories: state.catalog.categories,
});
export default connect(mapStateToCategoryBody)(Categories);
