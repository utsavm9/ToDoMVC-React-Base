import React, { Component } from 'react';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import { connect } from 'react-redux';
import { UPDATE_CURRENT_TODO } from '../actions/headerActions';
import { ADD_TODO } from '../actions/todoActions';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.dispatch({
            type: UPDATE_CURRENT_TODO,
            payload: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch({
            type: ADD_TODO,
            payload: this.props.todoText,
        })
    }

    render() {
        return (
            <header className="header">
                <h1>To Do, Now!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="new-todo" placeholder="What needs to be done?" autoFocus
                        onChange={this.handleChange} value={this.props.todoText} />
                </form>
            </header>
        );
    }
}

//export default Header;

function mapStateToProps(state) {
    return {
        todoText: state.currentTodo,
    }
}

export default connect(mapStateToProps)(Header)