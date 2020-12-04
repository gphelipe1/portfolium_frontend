import './register.css';
import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import profileSymb from '../../assets/profile.png';
import Logo from '../../assets/logo.png';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.login = {
            
        }
    }

    signin = () => {
        this.props.history.push("/login");
    }

    render(){
        return(
            <div>

                <Link className="homelink" to="/">
                    <img className = "logoImage" alt ="logo" src = {Logo}/>
                </Link>

                <div className = "registerContainer">
                    
                    <div className="content">

                    <img className = "profileSymb" src={profileSymb} alt = "Profile"/> 
                    
                        <form>
                            <input
                                type="text"
                                placeholder="Login"
                                onChange={e => this.setState({ username: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="RegistrationID"
                                onChange={e => this.setState({ registrationId: e.target.value })}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={e => this.setState({ password: e.target.value })}
                            />

                            <button className="button">Create</button>

                        </form>
                        <hr/>
                
                        <section>
                    
                            <p>Don't have an account yet?</p>
                    
                            <button onClick={this.signin} >Sign Up</button>
                    
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default withRouter(Register);