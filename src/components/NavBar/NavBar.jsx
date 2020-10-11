import React, { Component } from 'react'
import './NavBar.css'

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <button class="left_nav"><i class="nav_icon">&#xe800;</i></button>
                <button class="center_nav"><i class="nav_icon">&#xe801;</i></button>
                <button class="right_nav"><i class="nav_icon">&#xe802;</i></button>
            </nav>
        )
    }
}

export default NavBar
