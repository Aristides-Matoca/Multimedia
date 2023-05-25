import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import React from 'react';

const Nav = () => {
    return(
        <div className='col-sm-8'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Logo</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <form className="form-inline">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Pesquisar" />
                                <div className="input-group-append">
                                <button className="btn btn-outline-dark" type="button">Buscar</button>
                                </div>
                            </div>
                            </form>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Overview</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Subscrições</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Streams</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Biblioteca</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Any Account</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Nav;
