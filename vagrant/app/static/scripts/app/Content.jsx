import React from "react";
import {connect} from "react-redux";


let Categories = (props) => {
    return (
        <div className="col-md-4">
            <h3>Categories</h3>
            {props.categories.map((category) => {
                return Entry({...category, key: 'd'+category.id})
            })}
        </div>
    )
};
const mapStateToCategoryBody = (state) => ({
    categories: state.catalog.categories
});
Categories = connect(mapStateToCategoryBody)(Categories);

let Items = (props) => {
    return (
        <div className="col-md-8">
                <h3>Latest Items</h3>
                {props.items.map((item) => {
                    return Entry({...item, key: 'd'+item.id})
                })}
        </div>
    )
};
const mapStateToBody = (state) => ({
    items: state.catalog.items
});
Items = connect(mapStateToBody)(Items);

const Entry = ({name, key}) => {
    return (
        <div key={key} className="item-list">
            {name}
        </div>
    )
};

const Content = () => {
    return (
        <div className="container">
            <div className="row">
                <Categories/>
                <Items/>
            </div>
        </div>
    )
};

export default Content;
