import React from 'react'

class Player extends React.Component {

  constructor(){
    super()
    this.state = {
      lastRoll: 0
    }
  }

  rollDice() {
    const {winner, position, finishPosition, onChange} = this.props
    if (winner) {return }
    const diceResult = (1 + Math.floor(Math.random() * 3))
    let newPosition = position + diceResult
      if (newPosition > finishPosition ){
        newPosition = finishPosition
      }
    onChange(this.props.name, newPosition);
    this.setState({
      lastRoll: diceResult
    })
    console.log(newPosition)
  }

  render() {
    return (
      <table>
        <tbody>
        <tr>
          <td>{ this.props.name } </td>
          <td>
          <img style={{height: "20px", width: "auto"}} src="http://www.quickanddirtytips.com/sites/default/files/images/4348/dice.jpg" onClick={ this.rollDice.bind(this)}/>
          </td>
          <td>Last roll: {this.state.lastRoll}</td>
      </tr>
      </tbody>
      </table>
    )
  }
}

export default Player
