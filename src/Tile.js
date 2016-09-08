import React from 'react';

class Tile extends React.Component {

  render() {
    const style = {
      width:"50px", height:"50px", border:"3px solid #34ad00",
      margin:"5px", padding:"5px", display:"inline-block",
      borderRadius: "25px", fontFamily: "Arial", textAlign: "center"
    }
    const player = {
      color:"#ea0000"
    }
    return (
      <div style={style}>
        <div>{ this.props.name }</div>
        <div style={player}>{ this.props.players }</div>
      </div>
    );
  }
}

export default Tile;
