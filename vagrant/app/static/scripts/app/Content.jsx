import React from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import Entry from './Entry';

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
