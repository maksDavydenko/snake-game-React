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
        direction: 'RIGHT',
        snakeDots :[
            [0,0],
            [2,0]
        ]
    };

    componentDidMount(){
        document.onkeydown = this.onKeyDown;
    }

    onKeyDown = e =>{
        e = e || window.event;
        switch (e.keyCode) {
            case 38:
                this.setState({direction : 'UP'});
                break;
            case 40:
                this.setState({direction : 'DOWN'});
                break;
            case 37:
                this.setState({direction: 'LEFT'});
                break;
            case 39:
                this.setState({direction: 'RIGHT'});
                break;
        }
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
