import React from 'react';

class Footer extends React.Component {
    render() {
        var clearButton = "";
        if (this.props.numOfFinished > 0)
            clearButton = (<button className="clear-completed" onClick={this.props.removeFunc}>Clear completed</button>);

        var filters = ['All', 'Active', 'Completed']

        return (
            <footer className="footer">

                <span className="todo-count"><strong>{this.props.numOfUnfinished} </strong>
                    item{(this.props.numOfUnfinished === 1) ? "" : "s"} left</span>
                    
                {/* <!-- Remove this if you don't implement routing --> */}
                <ul className="filters">
                    {
                        filters.map((element) => {
                            var classN = "";
                            if (element === this.props.activeFilter)
                                classN = "selected";

                            return (
                                <li key={element} ><a className={classN}
                                    onClick={(e) => this.props.filterFunc(element, e)}>{element}</a></li>
                            );
                        })
                    }
                </ul>
                {clearButton}
            </footer>

        );
    }
}

export default Footer;