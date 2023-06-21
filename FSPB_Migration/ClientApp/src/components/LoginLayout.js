import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { LoginNavMenu } from './LoginNavMenu';
import { Footer } from './Footer';

export class LoginLayout extends Component {
  static displayName = LoginLayout.name;

  render() {
    return (
      <div>
        
        <LoginNavMenu />
        <Container>
          {this.props.children}
        </Container>
        <Footer />
      </div>
    );
  }
}
