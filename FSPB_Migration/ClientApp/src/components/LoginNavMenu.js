import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './LoginNavMenu.css';

export class LoginNavMenu extends Component {
  static displayName = LoginNavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      //<header>
      //  <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
      //    <NavbarBrand tag={Link} to="/">FSPB_Migration</NavbarBrand>
      //    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      //    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
      //      <ul className="navbar-nav flex-grow">
      //        <NavItem>
      //          <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
      //        </NavItem>
      //        <NavItem>
      //          <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
      //        </NavItem>
      //        <NavItem>
      //          <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
      //        </NavItem>
      //      </ul>
      //    </Collapse>
      //  </Navbar>
      //</header>
        <nav className="login-header">
            <div className="container">
                <div className="login-nav">
                    <NavbarBrand tag={Link} to="/"><img src="https://foodsafetyplansbuilder.com.au/Website-assets/img/footer-fspb.svg" alt="img" className="login-logo img-fluid" /></NavbarBrand>
                </div>
            </div>
        </nav>
    );
  }
}
