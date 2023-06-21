import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
export class Footer extends Component {
  static displayName = Footer.name;

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

    const myComponentStyle = {  
      
        transform: 'translate(18px,1px)'
    
   }  
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
        <footer id="new_footer">
            <div className="main_footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="lower_footer">
                                <p className="mb-0 text-uppercase">© COPYRIGHT 2023 | ALL RIGHTS RESERVED,<br/>               Food Safety Plans Builders</p>
                            </div>
                        </div>

                        <div className="col-md-6 footer-contact">
                            <div className="d-md-flex align-items-lg-end flex-column">
                                <h6 >
                                    Contact Us
                                </h6>
                              
                                  <a  className="" href="mailto:admin@foodsafetyplansbuilder.com.au"><FontAwesomeIcon icon="fa-solid fa-envelope"style={myComponentStyle} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;admin@foodsafetyplansbuilder.com.au  </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}
