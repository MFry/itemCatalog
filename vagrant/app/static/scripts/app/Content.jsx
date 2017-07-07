import React from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import Entry from './Entry';
import Items from './Items';

const Content = () => {
    return (
        <div className="container">
            <div className="row">
                <Categories />
                <Items />
            </div>
        </div>
    );
};

export default Content;
