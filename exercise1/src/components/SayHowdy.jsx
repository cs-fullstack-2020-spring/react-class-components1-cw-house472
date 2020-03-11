import React, { Component } from 'react';

class SayHowdy extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.my_greeting} </h2>
            </div>

        )
    }

}

export default SayHowdy;