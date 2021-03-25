import React,{Component} from 'react';
/* import {Navbar, Nav} from 'react-bootstrap'; */
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <>
            <h1>COVID-19 TRACKER</h1>
            <nav className="navbar navbar-dark bg-dark">
                <Link className="nav-link" to="/india">India</Link>
                <Link className="nav-link" to="/world">World</Link>
            </nav>
            </>
        )
    }
}
export default Header;