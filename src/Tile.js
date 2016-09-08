import React from 'react';
import Paper from 'material-ui/Paper'

class Tile extends React.Component {

  render() {
    const style = {
      height: 80,
      width: 80,
      margin: 20,
      padding: 5,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: '#f6ffdd'
    };
    const player = {
      color:"#ea0000"
    }
    return (
      <Paper style={style} circle={true}>
        <div>{ this.props.name }</div>
        {this.props.players.map(function(p, i){
            return <div key={i} style={player}> {p.name} </div>
          })
        }
        </Paper>
    );
  }
}

export default Tile;
