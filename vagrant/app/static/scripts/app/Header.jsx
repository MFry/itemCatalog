import React from 'react';


const Header = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top" style={{backgroundColor: '#3F51b5'}}>
            <div className="container">
                <div className="col-md-10 navbar-header">
                    <div className="navbar-brand">Catalog App</div>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-default navbar-btn">Sign in</button>
                </div>
            </div>
        </nav>
    )
};
export default Header;
