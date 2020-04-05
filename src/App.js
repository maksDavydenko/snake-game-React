import React, {Component} from 'react';
import Snake from './components/Snake';
import SnakeFood from './components/SnakeFood';

function randomCoordinate(max, min){
    return Math.floor((Math.random()*(max-min+1)+min)/2) *2;
}

const getRandomCoordinates = () =>{
    let min = 1;
    let max = 98;

    let x = randomCoordinate(max, min);
    let y = randomCoordinate(max, min);

    return [x,y];
};

class App extends Component{

    state = {
        food: getRandomCoordinates(),
        snakeDots :[
            [0,0],
            [2,0]
        ]
    }

    render() {
    return (
        <div className="game-area">
            <Snake snakeDots ={this.state.snakeDots}/>
            <SnakeFood dot={this.state.food}/>
        </div>
      );
    }
}

export default App;
