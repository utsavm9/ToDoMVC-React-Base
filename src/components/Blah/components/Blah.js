import React from 'react';

class Blah extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      blah:"blah",
    }
  }
  
  getBlahStyle = () => {
    return {
      color: "red",
      fontSize: "18px",
    }
  }

  render() {
    //could jsut write console.log(this.props) but the "props" lets you know which console log is which
    console.log("props", this.props)
    return (
      <div style={this.getBlahStyle()}>blah</div>
    );
  }
}

export default Blah;