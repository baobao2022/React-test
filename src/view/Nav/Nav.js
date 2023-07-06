import React from 'react';
import {
    NavLink
} from "react-router-dom";
import './Nav.scss';

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todos
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    ListU
                </NavLink>
                <NavLink to="/facebook" activeClassName="active">
                    Facebook
                </NavLink>
                <NavLink to="/youtube" activeClassName="active">
                    Youtube
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
            </div>
        )
    }
}
export default Nav;