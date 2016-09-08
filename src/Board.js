import React from 'react'
import Tile from './Tile'
import Player from './Player'

class Board extends React.Component {
  constructor() {
    super()

    this.state = {
      winner: null,
      whoseTurn: null,
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
    finishPosition={this.state.tiles.length}
    winner={this.state.winner}
    onChange={this.onChangePosition.bind(this) }/>)
  }

  startGame(){
    const { tiles, players } = this.state
    let newTiles = tiles.map(function(tile){
      if(tile.id === 1){
        return {
          id: tile.id,
          name: tile.name,
          players: tile.players.concat(players)
        }
      }
      return tile
    })
    this.setState({
      tiles: newTiles,
      whoseTurn: players[0]
    })
  }

  onChangePosition(name, position) {
      const { players } = this.state
      const player = players.find(function(p){
        return p.name === name
      })
      let newPlayers = players.map((p) => {
        if (p.name === name) {
          return {
            name: name,
            position: position,
          }
        }
          return p
      })

      let newTiles = this.state.tiles.map(function(tile){
        console.log(position +', '+ player.position)
        if(tile.id === player.position){
          return {
            id: tile.id,
            name: tile.name,
            players: tile.players.filter(function(p){
              return p.name !== player.name
            })
          }
        }
        if(tile.id === position){
          return {
            id: tile.id,
            name: tile.name,
            players: tile.players.concat([player])
          }
        }
        return tile
      })

      this.setState({
        tiles: newTiles,
        players: newPlayers,
        winner: position === newTiles.length ? player : null
      })

    }


  render() {
    const { tiles, winner } = this.state

    return (
      <div>
      <h1>Gooseboard</h1>
        <button onClick={this.startGame.bind(this)}>Start game</button>
        <div>
          Winner: { winner ? winner.name : "Still playing..." }
        </div>
        <div>
            { tiles.map(this.renderTile.bind(this)) }
            { this.state.players.map(this.renderPlayer.bind(this)) }
        </div>
      </div>
    )
  }
}

export default Board
