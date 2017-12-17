import React from 'react';
import Categories from './Categories';
import Items from './Items';

const Content = () => (


  <div className="container">
    <div className="section">

      {/* Icon Section   */}
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <br />
            <h5 className="center">Categories</h5>
            <br />
            <Categories />
          </div>
        </div>

        <div className="col s12 m8">
          <div className="icon-block">
            <br />
            <h5 className="center">Latest Items</h5>
            <br />
            <Items />
          </div>
        </div>
      </div>

    </div>
    <br /><br />
  </div>
);

export default Content;
