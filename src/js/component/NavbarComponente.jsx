import React from "react";

export const NavbarComponente = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                <div className="container-fluid d-flex justify-content-between px-5">
                    <div>
                        <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                    </div>
                    <div>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                                <a className="nav-link text-secondary" href="#">About</a>
                                <a className="nav-link text-secondary" href="#">Services</a>
                                <a className="nav-link text-secondary" href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
};