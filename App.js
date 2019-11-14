import React, { Component } from 'react';
import {robots} from './robots';
import Cardlist from './Cardlist';
import Search from './Search';
import './App.css';


class App extends Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
    }
    render(){ 
        const filteredrobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div id='body' className="tc">
              <h1 className='f2 tc blue'>Robo Friends</h1>
              <Search searchChange={this.onSearchChange}/>
            
              <Cardlist robots={filteredrobots}/>
            </div>
        )
    }
}


export default App;

