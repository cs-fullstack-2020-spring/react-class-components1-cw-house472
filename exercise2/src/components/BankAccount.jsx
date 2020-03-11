import React, {Components, Component} from 'react'

class BankAccount extends Component{
    render(){
        return (
            <div>
              <h2>Welcome {this.props.first_name}</h2> 
              <h3>Your balance is: {this.props.balance}</h3> 

            </div>
        )

        
    }
}
export default BankAccount;