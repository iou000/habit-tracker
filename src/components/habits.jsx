import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    



    render() {
        return (
        <>    
        <ul>
            {this.props.habits.map(habit => (
            <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.handleIncreament}
                onDecrement={this.props.handleDecreament}
                onDelete={this.props.handleDelete}
                />
            ))}
        </ul>
        
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>

        </>
        );
    }
}

export default Habits;