import React from 'react';

const FullScreenLoader = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 loader">
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        <span className="visually-hidden">Loading...</span>
                   
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;