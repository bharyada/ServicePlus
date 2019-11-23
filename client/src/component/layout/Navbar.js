import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { DropDownMenu } from "react-bootstrap/DropdownMenu";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  // const guestLinks = (

  // );

  return (
    <section className="menu_section">
      <div className="container">
        <div className="navbar navbar-inverse">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target=".js-navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse js-navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link title="Service+" to="/">
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <Link
                  to="/"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Services Offered <span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/localmovers" title="Local Movers">
                      Local Movers
                    </Link>
                  </li>
                  <li>
                    <Link to="/longdistancemovers" title="Long Distance Movers">
                      Long Distance Movers
                    </Link>
                  </li>
                  <li>
                    <Link to="/commercialmovers" title="Commercial Movers">
                      Commercial Movers
                    </Link>
                  </li>
                  <li>
                    <Link to="/vehiclemovers" title="Vehicle Movers">
                      Vehicle Movers
                    </Link>
                  </li>
                  <li>
                    <Link to="/officerelocation" title="Office Relocation">
                      Office Relocation
                    </Link>
                  </li>
                  <li>
                    <Link to="/homeshifting" title="Home Shifting">
                      Home Shifting
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link
                  to="/"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Why Service+ <span className="caret"></span>
                </Link>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link to="/about" title="About Us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/PackersAndMovers" title="Packers And Movers">
                      Packers And Movers
                    </Link>
                  </li>
                  <li>
                    <Link to="reviews.html" title="Service+ Reviews">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact" title="Contact Us">
                  Contact
                </Link>
              </li>
              <li className="dropdown">
                <Link
                  to="/"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  My account <span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="new_regist"
                      to="pnmPanel.html"
                      target="_BLANK"
                    >
                      If you are a registered
                      <br />
                      Packer and Mover please <br />
                      <span className="click">click here</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#"
                  className="getlisted"
                  title="Post Your Ad Here"
                  data-toggle="modal"
                  data-target="#getlist_Modal"
                >
                  Get Listed
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
