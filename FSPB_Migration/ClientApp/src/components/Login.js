import React, { Component } from 'react';
import { LoginLayout } from './LoginLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export class Login extends Component {
  static displayName = Login.name;
  state = {
    type: 'text',
  }
  handleClick = () => this.setState(({ type }) => ({
    type: type === 'text' ? 'password' : 'text'
  }))

  render() {

    return (
      <LoginLayout>
        <div>
          <form>
          <input type="text" className="form-control " placeholder='Enter Your Email'/>
          <input type={this.state.type} className="form-control password__input" placeholder='Enter Your Password'/>
              <span className="password__show" onClick={this.handleClick}>{this.state.type === 'text' ? <FontAwesomeIcon icon="fa-solid fa-eye" /> : <FontAwesomeIcon icon="fa-solid fa-eye-slash" />}</span>
              <button type='submit' className='btn btn-danger'>Login</button>
          </form>
        </div>
      </LoginLayout>

    );
  }
}
