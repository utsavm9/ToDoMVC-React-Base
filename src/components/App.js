import React, { Component } from 'react';
import Blah from './Blah.js'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import { connect } from 'react-redux';
import { ADD_TODO } from '../actions/todoActions.js';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            numUnfinished: 0,
            numTodos: 0,
            activeFilter: 'All',
        };

        this.addToDo = this.addToDo.bind(this);
        this.modifyToDo = this.modifyToDo.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.removeKeyID = this.removeKeyID.bind(this);
        this.removeCompleted = this.removeCompleted.bind(this);
    }

    addToDo(todo) { 
        this.props.dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }

    modifyToDo(keynum, event) {
        var previousTodos = this.state.todos;
        var changeThis = previousTodos.find(element => (element.key === keynum))
        changeThis.finished = !changeThis.finished;
        var unfin = (changeThis.finished) ? this.state.numUnfinished - 1 : this.state.numUnfinished + 1

        this.setState({
            numUnfinished: unfin,
            todos: previousTodos
        });

    }

    handleFilterChange(newFilter) {
        this.setState({
            activeFilter: newFilter
        });

    }

    removeKeyID(removeID) {
        var arrayTodos = this.state.todos;
        var didRemove = false;
        var didRemoveUnfinished = false;

        arrayTodos = arrayTodos.filter((element) => {
            if (element.key === removeID) {
                didRemove = true;
                if (!element.finished) didRemoveUnfinished = true;
                return false;
            }
            return true;
        });

        var numLeft = (didRemove) ? this.state.numTodos - 1 : this.state.numTodos;
        var unfinLeft = (didRemoveUnfinished) ? this.state.numUnfinished - 1 : this.state.numUnfinished;
        this.setState({
            numTodos: numLeft,
            numUnfinished: unfinLeft,
            todos: arrayTodos
        });
    }

    removeCompleted() {
        var arrayTodos = this.state.todos;
        var numRemoved = 0;

        arrayTodos = arrayTodos.filter((element) => {
            if (element.finished) {
                numRemoved++;
                return false;
            }
            return true;
        });

        this.setState({
            numTodos: this.state.numTodos - numRemoved,
            numOfUnfinished: this.state.numTodos - numRemoved,
            todos: arrayTodos
        });
    }

    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header/>

                    <Main todos={this.props.todos} modifyFunction={this.modifyToDo} activeFilter={this.state.activeFilter}
                        removeKeyID={this.removeKeyID} />

                    <Footer numOfFinished={this.props.numTodos - this.props.numUnfinished}
                        numOfUnfinished={this.props.numUnfinished}
                        filterFunc={this.handleFilterChange} activeFilter={this.state.activeFilter}
                        removeFunc={this.removeCompleted} />
                </section>
                {/* <Blah /> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        todos: state.todosList.todos,
        numTodos: state.todosList.numTodos,
        numUnfinished: state.todosList.numUnfinished,
    }
}

export default connect(mapStateToProps)(App)