import React from 'react'
import Todo from './Todo'

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.arrayToTodos = this.arrayToTodos.bind(this);
    }

    arrayToTodos(todoItem) {
        if ((this.props.activeFilter === 'Completed' && !todoItem.finished) ||
            (this.props.activeFilter === 'Active' && todoItem.finished))
            return;

        return (<Todo key={todoItem.key} keyid={todoItem.key}
            title={todoItem.title} finished={todoItem.finished} editing={todoItem.editing}
            modifyFunction={this.props.modifyFunction} removeKeyID={this.props.removeKeyID}/>);
    }

    render() {
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">

                    {this.props.todos.map(item => this.arrayToTodos(item))}

                </ul>
            </section>
        );
    }
}

export default Main;