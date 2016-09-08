import React from 'react';

class Tile extends React.Component {

  render() {
    const style = {
      width:"50px", height:"50px", border:"3px solid #34ad00",
      margin:"5px", padding:"5px", display:"inline-block",
      borderRadius: "25px", fontFamily: "Arial", textAlign: "center",
      backgroundColor: "#fff8bf"
    }
    const player = {
      color:"#ea0000"
    }
    return (
      <div style={style}>
        <div>{ this.props.name }</div>
        {
          this.props.players.map(function(p, i){
            return <div key={i} style={player}> {p.name} </div>
          })
        }
      </div>
    );
  }
}

export default Tile;
