import React from 'react';
 import './Header.css';
const Header = () => {
    return (
        <div className="Header">
            <div className="bg-img">
            <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="#no">
                <img src="https://i.ibb.co/BB5JXTX/Untitled-1.png" alt="no"/>
              </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#Books">Books</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Courses">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Others">Others</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Blog">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link baton" href="#Sign In">Sign In</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>
            </div>
        </div>
    );
};

export default Header;

