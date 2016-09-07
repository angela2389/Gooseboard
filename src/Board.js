import React from 'react'
import Tile from './Tile'

class Board extends React.Component {
  constructor() {
    super()

    this.state = {
      tiles: [
        { name: "Start", players: [] },
        { name: "Two", players: [] },
        { name: "Three", players: [] },
        { name: "Four", players: [] },
        { name: "Five", players: [] },
        { name: "Six", players: [] },
        { name: "Seven", players: [] },
        { name: "Finish", players: [] },
      ]
    }
  }

  renderTile(tile, index) {
    return (
      <Tile key={ index }
        name={tile.name} />
    );
    }

  render() {
    const { tiles } = this.state

    return (
      <div>
      <h1>Gooseboard</h1>
      <table>
        <tbody>
          <tr>
          { tiles.map(this.renderTile.bind(this)) }
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

export default Board
