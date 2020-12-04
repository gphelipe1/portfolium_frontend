import React from 'react';
import { withRouter,Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import "./home.css";

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            projetos:[]
        };
    }

    
    render(){
        return(
            <div>
                <div className="Navbar">
                    <Link className="homelink" to="/">
                        <img className = "logoImage" alt ="logo" src = {Logo}/>
                    </Link>
                    <Link className="homebutton" style={{textDecoration: `none`}} to="/" >Home</Link>
                    <Link className="profilebutton" style={{textDecoration: `none`}} to="/login">Profile</Link>
                    <Link className="button" to="/login">Login</Link>
                </div>
                <div className="nav-div-home">Portfolios</div>
                <hr/>
                
            </div>
        );
    }
}

export default withRouter(Home);