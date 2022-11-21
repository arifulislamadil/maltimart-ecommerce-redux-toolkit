import React from 'react';
import { Container, Row } from 'reactstrap';
import './Header.css';
import logo from "../../assets/images/eco-logo.png"
import { NavLink } from 'react-router-dom';
import userIcon from "../../assets/images/user-icon.png";
import {motion} from "framer-motion";

const nav_link=[
    {
        path: "home",
        display: "Home"
    },
    {
        path: "shop",
        display: "Shop"
    },
    {
        path: "cart",
        display: "Cart"
    },
]

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <Row>
                    <div className='nav_wrapper'>
                        <div className='logo'>
                            <img src={logo} alt="" />
                            <div>
                                <h3>Multimart</h3>
                                <p>Since 1995</p>
                            </div>
                        </div>
                        <div className='navigation'>
                            <ul className='menu'>
                                <li className='nav_item'>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to="/shop">Shop</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to="/cart">Cart</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='nav_icons'>
                            <span className='fav_icon'>
                            <i class="ri-heart-line"></i>
                            <span className='badge'>
                                1
                            </span>
                            </span>
                            <span className='cart__icon'><i class="ri-shopping-bag-line"></i>
                            <span className='badge'>
                                1
                            </span>
                            </span>
                            <motion.img whileTap={{sccart_iconale: 1.2}} src={userIcon} alt=""/>
                        </div>
                        <div className='mobile_menu'>
                            <span><i class="ri-menu-line"></i></span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;