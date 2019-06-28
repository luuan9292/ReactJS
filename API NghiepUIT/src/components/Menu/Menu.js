import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
    {
        to: "/",
        name: 'Trang Chu',
        exact: true
    },
    {
        to: '/product-list',
        name: 'Quan Ly San Pham',
        exact: false
    }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                let active = match ? "active" : "";
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <a className="navbar-brand" href="http://localhost:4000/">Call API</a>
                <ul className="nav navbar-nav">
                    
                    {this.showMenus(menus)}

                </ul>
            </nav>
        );
    }

    showMenus = (menus) => {
        let result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
            })
        }
        return result;
    }
}

export default Menu;
