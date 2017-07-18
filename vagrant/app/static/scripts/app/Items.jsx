import React from 'react';
import { connect } from 'react-redux';
import Entry from './Entry';

let Items = props => {
    return (
        <div className="col-md-8">
            {props.items.map(item => {
                return Entry({ ...item, key: 'd' + item.id });
            })}
        </div>
    );
};
const mapStateToBody = state => ({
    items: state.catalog.items,
});
export default connect(mapStateToBody)(Items);
