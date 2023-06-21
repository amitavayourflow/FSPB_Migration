import React, { Component } from 'react';
import { LoginLayout } from './LoginLayout';
export class Login extends Component {
  static displayName = Login.name;

  render() {
    return (
      <LoginLayout>
      <div>
        <h1>Hello, world!</h1>
      </div>
      </LoginLayout>
   
    );
  }
}
