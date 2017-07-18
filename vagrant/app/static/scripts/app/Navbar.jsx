import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="col-md-10 navbar-header">
                    <div className="navbar-brand">Catalog App</div>
                </div>
                <div className="col-md-2">
                    <button
                        type="button"
                        className="btn btn-default navbar-btn"
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
