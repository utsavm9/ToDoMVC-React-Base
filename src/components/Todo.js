import React from 'react';

class Todo extends React.Component {

    render() {
        var liClass = ""
        var inputTag = ""
        if (this.props.editing)
            liClass += "editing ";
        if (this.props.finished) {
            liClass += "completed ";
            inputTag = (<input className="toggle" type="checkbox" defaultChecked />);
        }
        else {
            inputTag = (<input className="toggle" type="checkbox" />);
        }

        return (
            <li className={liClass}>
                <div className="view">
                    {inputTag}
                    <label>{this.props.title}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue={this.props.title} />
            </li>
        );
    }
}

export default Todo;