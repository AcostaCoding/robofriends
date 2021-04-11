import React, { Component } from 'react'
import CardList from './CardList'
import Searchbox from './Searchbox'
import Scroll from './Scroll'

import '../Styles/App.css'


 class App extends Component {
    
    constructor () {
        super()
        this.state = {
          robots:[],
          searchfield:''
        }
      }

      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({robots:users}));
      }
      
      onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div>
                <Searchbox onSearchChange = {this.onSearchChange}  searchfield = {this.state.searchfield}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>                
                </Scroll>
            </div>
        )
    }
}

export default App