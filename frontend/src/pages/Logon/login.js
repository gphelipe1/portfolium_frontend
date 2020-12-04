import './login.css';
import React, {useState} from 'react';
import {withRouter, Link, useHistory} from 'react-router-dom';
import Logo from '../../assets/logo.png'


class Login extends React.Component{

  
  signup = () =>{
    this.props.history.push("/register");
  }

  render(){
    return (
      <div>
        <Link className="homelink" to="/">
            <img className="logoImage" alt ="logo" src = {Logo}/>
        </Link>
        <div className = "loginContainer">
          
          <div className = "content">
            
            <form>
            
              <div>
              
                <input
                    type="text"
                    placeholder="Login"
                    onChange={e => this.setState({ username: e.target.value })}
                  />
            
              </div>
            
              <div>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
              
              </div>
            
              <div>
                  <button className="button">Sign In</button>
              
              </div>
            
              </form>
            
              <hr/>
              
              <section>
            
                <p>Don't have an account yet?</p>
            
                <button onClick={this.signup} >Sign Up</button>
            
              </section>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);