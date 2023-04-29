import {useEffect, useState} from 'react';

const Game = () => {

    const[activePlayer, setActivePlayer] = useState('X');

    const gameArray = [[],[],[]];

    const [grid, updateGrid] = useState(gameArray);
    const [winner, setWinner] = useState('');

    const findWinner = (grid) => {
        if(grid[0][0]+grid[0][1]+grid[0][2] === 'XXX' || grid[0][0]+grid[0][1]+grid[0][2] === 'OOO') {
            console.log("First Row Winner");
            return grid[0][0];
        }
        else if(grid[1][0]+grid[1][1]+grid[1][2] === 'XXX' || grid[1][0]+grid[1][1]+grid[1][2] === 'OOO') {
            console.log("Second Row Winner");
            return grid[1][0];
        }
        else if(grid[2][0]+grid[2][1]+grid[2][2] === 'XXX' || grid[2][0]+grid[2][1]+grid[2][2] === 'OOO') {
            console.log("Third Row Winner");
            return grid[2][0];
        }
        else if(grid[0][0]+grid[1][0]+grid[2][0] === 'XXX' || grid[0][0]+grid[1][0]+grid[2][0] === 'OOO') {
            console.log("First Column Winner");
            return grid[0][0];
        }
        else if(grid[0][1]+grid[1][1]+grid[2][1] === 'XXX' || grid[0][1]+grid[1][1]+grid[2][1] === 'OOO') {
            console.log("Second Column Winner");
            return grid[0][1];
        }
        else if(grid[0][2]+grid[1][2]+grid[2][2] === 'XXX' || grid[0][2]+grid[1][2]+grid[2][2] === 'OOO') {
            console.log("Third Column Winner");
            return grid[0][2];
        }
        else if(grid[0][0]+grid[1][1]+grid[2][2] === 'XXX' || grid[0][0]+grid[1][1]+grid[2][2] === 'OOO') {
            console.log("First Diagonal Winner");
            return grid[0][0];
        }
        else if(grid[0][2]+grid[1][1]+grid[2][0] === 'XXX' || grid[0][2]+grid[1][1]+grid[2][0] === 'OOO') {
            console.log("Second Diagonal Winner");
            return grid[0][2];
        }

    }

    const makeAMove = (i,j) => {
        
        updateGridValue(activePlayer, i,j);
    }

    const updateGridValue = (activePlayer, i,j) => {
        if(grid[i][j] || winner) {
            return;
        }
        updateGrid((oldState) => {
            const newState = [...oldState];
            (newState[i][j]) = activePlayer;
            return newState;
        });
        setActivePlayer((oldState) => oldState === 'X' ? 'O' : 'X');

    }

    useEffect(() => {
       // console.log("Execute only on mount.");
    });

    useEffect(() => {
        //console.log("Execute whenever there is a change in grid");
        
        if(findWinner(grid) === "X") {
            setWinner("X");
        } else if(findWinner(grid) === "O") {
            setWinner("O");
        }
        
      //  console.log(activePlayer);
    }, [grid]);

    useEffect(() => {
       //console.log("activePlayer change");
    }, [activePlayer]);

    return (
      
        <div className="game-board">
            <h2>Active Player: {activePlayer}</h2>
            <div className="board-row">
                <button className="square" onClick={() => makeAMove(0,0)}>{grid[0][0]}</button>
                <button className="square" onClick={() => makeAMove(0,1)}>{grid[0][1]}</button>
                <button className="square" onClick={() => makeAMove(0,2)}>{grid[0][2]}</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={() => makeAMove(1,0)}>{grid[1][0]}</button>
                <button className="square" onClick={() => makeAMove(1,1)}>{grid[1][1]}</button>
                <button className="square" onClick={() => makeAMove(1,2)}>{grid[1][2]}</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={() => makeAMove(2,0)}>{grid[2][0]}</button>
                <button className="square" onClick={() => makeAMove(2,1)}>{grid[2][1]}</button>
                <button className="square" onClick={() => makeAMove(2,2)}>{grid[2][2]}</button>
            </div>
            {winner && (<h3>Winner: {winner}</h3>)}
        </div>
    )
}

export default Game;