import React from 'react';

class Todo extends React.Component {

    render() {
        var liClass = ""
        if (this.props.editing)
            liClass += "editing ";

        // The Check Box
        var inputTag = ""
        if (this.props.finished) {
            liClass += "completed ";
            inputTag = (<input className="toggle" type="checkbox" defaultChecked
                keyid={this.props.keyid} onClick={(e) => this.props.modifyFunction(this.props.keyid, e)} />);
        }
        else {
            inputTag = (<input className="toggle" type="checkbox" keyid={this.props.keyid}
                onClick={(e) => this.props.modifyFunction(this.props.keyid, e)} />);
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