
import React from 'react'
import PropTypes from 'prop-types';

export default function Navber(props){
  return(
    <div>
<nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container d-flex justify-content-center">
        <a className="navbar-brand mx-3" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.aboutText}</a>
            </li>
           
          </ul>
          <form className="d-flex ms-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </div>
  )
}

