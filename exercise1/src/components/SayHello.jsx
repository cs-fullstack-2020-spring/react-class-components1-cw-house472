import React, { Component } from "react"


class SayHello extends Component {
    render() {
        return(
            <div>
              <h1>{this.props.greeting}</h1>  
                

            </div>
        )
    }
}

export default SayHello;




