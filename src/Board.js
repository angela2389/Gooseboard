import React from 'react'
import Tile from './Tile'
import Player from './Player'
import WhoIsPlaying from './WhoIsPlaying'

class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      winner: null,
      whoIsPlaying: null,
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
        { name: "Evy", position: 1, lastRoll: 0},
        { name: "Isa", position: 1, lastRoll: 0},
      ]
    }
  }

  startGame(){
    const { winner, whoIsPlaying, tiles, players } = this.state
    // Put all the players in the first tile and remove players from all other tiles
    const newTiles = tiles.map(function(tile){
      if(tile.id === 1){
        return {
          id: tile.id,
          name: tile.name,
          players: tile.players.concat(players)
        }
      }
      return {
        id: tile.id,
        name: tile.name,
        players: []
      }
    })
    // Set all players position to 1 and lastRoll to 0
    const newPlayers = players.map(function(player){
      return {
        name: player.name,
        position: 1,
        lastRoll: 0
      }
    })
    // Set the STATE
    this.setState({
      winner: null,
      whoIsPlaying: newPlayers[0],
      tiles: newTiles,
      players: newPlayers
    })
  }

  playTurn(player){
    const {winner, whoIsPlaying, tiles, players} = this.state
    const finishPosition = tiles.length
    // Check that there is already a winner (game is closed)
    if (winner) {return }
    // Check that it's your turn
    if(player.name !== whoIsPlaying.name){ return }
    // Roll the dice
    const diceResult = (1 + Math.floor(Math.random() * 3))
    // Get new player's position
    let newPosition = player.position + diceResult
    if (newPosition > finishPosition ){
      newPosition = finishPosition
    }
    // Change STATE
      // Set new winner
    let newWinner = null
    if(newPosition === finishPosition){
      newWinner = player
    }
      // Change player position and lastRoll
    let newPlayers = players.map((p) => {
      if (p.name === player.name) {
        return {
          name: p.name,
          position: newPosition,
          lastRoll: diceResult
        }
      }
      return p
    })
      // Change tile.players array for target tile
    let newTiles = tiles.map(function(tile){
        // Remove player from existing tile
      if(tile.id === player.position){
        return {
          id: tile.id,
          name: tile.name,
          players: tile.players.filter(function(p){
            return p.name !== player.name
          })
        }
      }
        // Add player in target tile
      if(tile.id === newPosition){
        return {
          id: tile.id,
          name: tile.name,
          players: tile.players.concat([player])
        }
      }
      return tile
    })
      // Get next player
    const nextPlayerIndex = players.indexOf(player) + 1
    let nextPlayer = null
    if(nextPlayerIndex <= (players.length - 1)){
      nextPlayer = players.find(function(p, i){
        return i === nextPlayerIndex
      })
    } else {
      nextPlayer = players[0]
    }
    // Save all above states
    this.setState({
      winner: newWinner,
      whoIsPlaying: nextPlayer,
      tiles: newTiles,
      players: newPlayers,
    })
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
      player={ player} />
    )
  }

  renderWhoIsPlaying(player) {
    return (
      <WhoIsPlaying
      player={player}
      playTurn={this.playTurn.bind(this) }/>
    )
  }

  render() {
    const { winner, whoIsPlaying, tiles, players } = this.state
    return (
      <div>
      <h1>Gooseboard</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Last roll</th>
            </tr>
          </thead>
          <tbody>
            { players.map(this.renderPlayer.bind(this)) }
          </tbody>
        </table>
        <button onClick={this.startGame.bind(this)}>Start game</button>
        <div>
          { winner ? <div>Winner: {winner.name}</div> : null }
        </div>
        <div>
            { tiles.map(this.renderTile.bind(this)) }
            { whoIsPlaying ? this.renderWhoIsPlaying(whoIsPlaying) : null}
        </div>
      </div>
    )
  }

}

export default Board
