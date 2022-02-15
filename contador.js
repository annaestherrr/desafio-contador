import React, { Component } from 'react'


class Contador extends Component {
    state = {
        number: 5,
        msg: "Certo!"
    }

    soma = () => {
        if (this.state.number < 10) {
            this.setState({
                number: this.state.number + 1,
                msg: "Certo!"
            })
            return this.state.number
        } else {
            this.setState({
                msg: "O contador não pode chegar acima de 10",
            })
        }
    }

    subtração = () => {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1,
                msg: "Certo!"
            })
            return this.state.number
        } else {
            this.setState({
                msg: "O contador não pode chegar abaixo de 0",
            })
        }
    };

    render(){
      return(
        <div>
          <button onClick={this.soma}> Somar </button>
          <h1>{this.state.number}</h1>
          <button onClick={this.subtração}> Subtrair </button>
          <h2>{this.state.msg}</h2>
        </div>
      )
    }
  }
  
export default Contador