import React from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import Entry from './Entry';
import Items from './Items';

const Content = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h3>Categories</h3>
                </div>
                <div className="col-md-8">
                    <h3>Latest Items</h3>
                </div>
            </div>
            <div className="row">
                <Categories />
                <Items />
            </div>
        </div>
    );
};

export default Content;
