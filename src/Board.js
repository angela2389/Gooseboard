import React from 'react'
import Tile from './Tile'
import Player from './Player'

class Board extends React.Component {
  constructor() {
    super()

    this.state = {
      tiles: [
        { id: 1, name: "Start", players: [] },
        { id: 2, name: "Two", players: [] },
        { id: 3, name: "Three", players: [] },
        { id: 4, name: "Four", players: [] },
        { id: 5, name: "Five", players: [] },
        { id: 6, name: "Six", players: [] },
        { id: 7, name: "Seven", players: [] },
        { id: 8, name: "Finish", players: [] },
      ],
      players: [
        { name: "Evy", position: 1},
        { name: "Isa", position: 1},
      ]
    }
  }

  renderTile(tile, index) {
    return (
      <Tile key={ index }
        name={tile.name}
        players={tile.players}/>
    );
    }

    renderPlayer(player, index) {
    return (
      <Player key={ index }
      name={player.name}
      position={player.position}
      onChange={this.onChangePosition.bind(this) }
    />
    )
  }

  onChangePosition(name, position) {
      const { players } = this.state
      let newPlayers = players.map((player) => {
        if (player.name === name) {
          return {
            name: name,
            position: position,
          }
        }
          return player
      })
      this.setState({
        players: newPlayers
      })
    }


  render() {
    const { tiles } = this.state

    return (
      <div>
      <h1>Gooseboard</h1>
        <div>
            { tiles.map(this.renderTile.bind(this)) }
            { this.state.players.map(this.renderPlayer.bind(this)) }
        </div>
      </div>
    )
  }
}

export default Board
