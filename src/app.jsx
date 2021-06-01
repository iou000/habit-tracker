import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component {
  
  state = {
    habits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Coding', count: 0},
    ],
  };

  handleIncreament = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  }

  handleDecreament = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count--;
    if(habits[index].count < 0){
        habits[index].count = 0;
    }
    this.setState({ habits });
  }

  handleDelete =(habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }


  render() {
    return (
      <>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} 
      />
      <Habits 
        habits={this.state.habits}
        handleIncreament = {this.handleIncreament}
        handleDecreament = {this.handleDecreament}
        handleDelete = {this.handleDelete}
      />
      </>
      );
  }
}

export default App;