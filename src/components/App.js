import React, { Component } from 'react';
import Blah from './Blah.js'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastIndex: 0,
            todos: [],
        };

        this.addToDo = this.addToDo.bind(this);
        this.modifyToDo = this.modifyToDo.bind(this);
    }

    addToDo(todo) {
        if (todo == '')
            return;
        var previousTodos = this.state.todos;
        previousTodos.push({
            key: this.state.lastIndex,
            title: todo,
            finished: false,
            editing: false
        });
        this.setState({
            lastIndex: (this.state.lastIndex + 1),
            todos: previousTodos,
        });
    }

    modifyToDo(keynum, event) {
        var previousTodos = this.state.todos;
        var changeThis = previousTodos.find(element => (element.key == keynum))
        changeThis.finished = !changeThis.finished;
        this.setState({
            todos: previousTodos
        });
    }

    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header saveToDo={this.addToDo} />
                    <Main todos={this.state.todos} modifyFunction={this.modifyToDo} />
                    <Footer />
                </section>
                <Blah />
            </div>
        );
    }
}

export default App;
