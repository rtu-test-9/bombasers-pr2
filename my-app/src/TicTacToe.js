import React from 'react';
import './tictactoe.css';
let matrix = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    clickHandler(event) {
        
    }

    render() {
        return (
            <div className="cell">
                {
                    this.props.value
                }
            </div>
        )
    }
}

class TicTacToe extends React.Component {
    
    render() {
        return (
            <div className="wrapper">
                {
                    matrix.map((cell, row) => {
                        return <div class="row">
                                {cell.map((col, index) => {
                                    return <Cell row={row} col={index} value={cell[index]}></Cell>
                                })}
                                </div>
                    })
                }
            </div>)
    }
}

class TicTacToeGame {

    constructor(matrix) {
        this.field = matrix;
    }

    check() {
        for (let i = 0; i < this.matrix.length; i++) {
            if (matrix[i].filter(cell => cell=='x').length == 3 || matrix[i].filter(cell => cell=='o').length == 3) return true;
        }

        let tempArray = []
        for (let i = 0; i < this.matrix.length; i++) {
            tempArray.push(this.matrix[i][i]);
        }

        if (tempArray.filter(cell => cell=='x').length == 3 || tempArray.filter(cell => cell=='o').length == 3) return true;

        for (let i = 0; i < this.matrix[0].length; i++) {
            if (matrix[i][0] == matrix[i][1] == matrix[i][2])
                return true;
        }
        return false;
    }

    moveAsComputer() {
        let condition = false;
        while (!condition) {
            let row = Math.random() * (3 - 0) + 0;
            let col = Math.random() * (3 - 0) + 0;
            if (this.matrix[row][col] != '') {
                condition = true;
            }
        }
    }

    acceptMove(row, col, value) {
        if (this.field[row][col] == '') {
            this.matrix[row][col] = value       
            return this.matrix[row][col]
        }
        else {
            return null;
        }
    }
}




export {TicTacToe};