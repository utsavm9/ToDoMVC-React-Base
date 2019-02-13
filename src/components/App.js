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
            todos: []
        };

        this.addToDo = this.addToDo.bind(this);
    }

    addToDo(todo) {
        var previousTodos = this.state.todos;
        previousTodos.push({
            title: todo,
            finsihed: false,
            editing: false
        });
        this.setState({
            todos: previousTodos,
        })
    }

    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header saveToDo={this.addToDo} />
                    {/* <!-- This section should be hidden by default and shown when there are todos --> */}
                    <Main todos={this.state.todos}/>
                    <Footer />
                </section>
                <Blah />
            </div>
        );
    }
}

export default App;
