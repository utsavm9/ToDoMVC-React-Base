import React, { Component } from 'react';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { whatToDo: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ whatToDo: event.target.value });
    }

    handleSubmit(event) {
        this.props.saveToDo(this.state.whatToDo);
        this.setState({
            whatToDo: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <header className="header">
                <h1>To Do, Now!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="new-todo" placeholder="What needs to be done?" autoFocus
                        onChange={this.handleChange} value={this.state.whatToDo} />
                </form>
            </header>
        );
    }
}

export default Header;