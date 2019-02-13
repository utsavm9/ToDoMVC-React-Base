import React, { Component } from 'react';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus />
            </header>
        );
    }
}

export default Header;