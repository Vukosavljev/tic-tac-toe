import React, { Component } from 'react'
import Square from './Square'


export default class Game extends Component {
    state = {
        squares: Array(9).fill(null),
        turn: true,
        end: false
    }
    handelClick = (index) => {
        if(!this.state.end) {
            let prevSquares = this.state.squares;
            prevSquares[index] = this.state.turn === true ? "X" : "O";
            
            this.setState({
                squares: prevSquares
            })
            this.setState({
                turn: !this.state.turn
            })
            
        }  
        if (checkWinner(this.state.squares)) {
            this.setState({
                end: !this.state.end
            })
        }
    }
    componentDidUpdate() {
        if (checkWinner(this.state.squares)) {
            alert(`The winner is ${checkWinner(this.state.squares)}`)
        }
    }
    render() {
    
    const squares = this.state.squares.map( (sq, index) => {
        return <Square key={index} handelClick={() => !this.state.end ? this.handelClick(index) : null}>{sq}</Square>
    })

    return (
      <div className="container">
        {squares}
      </div>
    )
  }
}

function checkWinner(array) {
    const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
  for (let winArray of winner) {
    let testArray = []
    for(let i = 0; i < winArray.length; i++) {
      testArray.push(array[winArray[i]])
    }
    if (testArray.every( el => el === 'X')){
      return 'X'
    }
    if (testArray.every( el => el === 'O')){
      return 'O'
    }
  }
  return false
}