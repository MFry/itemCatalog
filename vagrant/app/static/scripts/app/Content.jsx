import React from 'react';

const Categories = () => {
    return (
        <div className="col-md-4 snap-to">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Categories</h3>
                </div>
                <div className="panel-body">
                </div>
            </div>
        </div>
    )
};

const Items = () => {
    return (
        <div className="col-md-8 snap-to">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Latest Items</h3>
                </div>
                <div className="panel-body">
                </div>
            </div>
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
