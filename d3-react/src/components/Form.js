import React,{ Component } from 'react'
import {Icon, Button} from 'react-materialize'

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      data: [],
    };
  }

  handleChange = (event) => {
    //setState in here
    console.log(event.target.value)
    let value = parseInt(event.target.value)
    this.setState({
      [event.target.name] : value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let dataArray = []
    dataArray.push(this.state.input1, this.state.input2, this.state.input3, this.state.input4, this.state.input5)
    this.setState({
      data: dataArray
    })
  }

  render(){
    return(
    <div class="row">
      <form class="col s12" onSubmit={this.handleSubmit}>
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" name='input1' type="number" placeholder="input a number" class="validate" value={this.state.input1} onChange={this.handleChange}/>
            <label for="icon_prefix">First Name</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" name='input2' type="number" placeholder="input a number" class="validate" value={this.state.input2} onChange={this.handleChange}/>
            <label for="icon_prefix">First Name</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" name='input3' type="number" placeholder="input a number" class="validate" value={this.state.input3} onChange={this.handleChange}/>
            <label for="icon_prefix">First Name</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" name='input4' type="number" placeholder="input a number" class="validate" value={this.state.input4} onChange={this.handleChange}/>
            <label for="icon_prefix">First Name</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" name='input5' type="number" placeholder="input a number" class="validate" value={this.state.input5} onChange={this.handleChange}/>
            <label for="icon_prefix">First Name</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
         <i class="material-icons right">send</i>
        </button>
      </form>
    </div>

      // this closes return
    )
    // this closes render
  }
  // this closes class
}

export default Form;
