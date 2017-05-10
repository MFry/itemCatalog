import React from 'react';

const Categories = () => {
    return (
        <div className="col-md-4">
            <h1>Categories</h1>
        </div>
    )
};

const Items = () => {
    return (
        <div className="col-md-8">
            <h1>Latest Items</h1>
        </div>
    )
};

const Content = () => {
  return (
      <div className="row">
          <Categories/>
          <Items/>
      </div>
  )
};

export default Content;
