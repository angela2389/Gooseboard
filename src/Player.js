import React from 'react'

class Player extends React.Component {

  rollDice() {
    if (this.props.winner) {return }
    const diceResult = (1 + Math.floor(Math.random() * 3))
    let newPosition = this.props.position + diceResult
      if (newPosition > this.props.finishPosition ){
        newPosition = finishPosition
      }
    this.props.onChange(this.props.name, newPosition);
    console.log(newPosition)
  }

  render() {
    return (
      <table>
        <tbody>
        <tr>
          <td>{ this.props.name } </td>
          <td>{ this.props.position } </td>
          <td>
          <img style={{height: "20px", width: "auto"}} src="http://www.quickanddirtytips.com/sites/default/files/images/4348/dice.jpg" onClick={ this.rollDice.bind(this)}/>
          </td>
      </tr>
      </tbody>
      </table>
    )
  }
}

export default Player
