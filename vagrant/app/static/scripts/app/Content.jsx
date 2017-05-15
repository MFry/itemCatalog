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
            <h3>Latest Items</h3>
        </div>
    )
};

const Content = () => {
  return (
      <div className="container-fluid" >
          <div className="row">
              <Categories/>
              <Items/>
          </div>
      </div>
  )
};

export default Content;
