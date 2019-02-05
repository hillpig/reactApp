import React, { Component } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLable from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import './App.css';

function Question(props) {
  
  if (props.question === 1) {
    return (
      <RadioGroup onChange={props.onChange} name="fruit" >
        <FormControlLable value="1" control = {<Radio />} label = "Apple" checked={true}/>
        <FormControlLable value="2" control = {<Radio />} label = "Orange"/>
        <FormControlLable value="3" control = {<Radio/>} label = "Watermelon" />
      </RadioGroup>
    );
  }

  if (props.question === 2) {
    return (
      <RadioGroup onChange={props.onChange} name="meat" value>
        <FormControlLable value="1" control = {<Radio />} label = "Pork" checked />
        <FormControlLable value="2" control = {<Radio />} label = "Beef"/>
        <FormControlLable value="3" control = {<Radio/>} label = "Lamb" />
      </RadioGroup>
    );
  }

  if (props.question === 3) {
    return (
      <RadioGroup onChange={props.onChange} name="fish" >
        <FormControlLable value="1" control = {<Radio />} label = "Cod"/>
        <FormControlLable value="2" control = {<Radio />} label = "Octopus"/>
        <FormControlLable value="3" control = {<Radio/>} label = "Lobster" />
      </RadioGroup>
    );
  }

  if (props.question === 4) {
    return (
      <RadioGroup onChange={props.onChange} name="vegetable" >
        <FormControlLable value="1" control = {<Radio />} label = "Tomato"/>
        <FormControlLable value="2" control = {<Radio />} label = "Plantegg"/>
        <FormControlLable value="3" control = {<Radio/>} label = "Celery" />
      </RadioGroup>
    );
  }

  if (props.question === 5) {
    return (
      <RadioGroup onChange={props.onChange} name="weather" >
        <FormControlLable value="1" control = {<Radio />} label = "Rain"/>
        <FormControlLable value="2" control = {<Radio />} label = "Frog"/>
        <FormControlLable value="3" control = {<Radio/>} label = "Cloud" />
      </RadioGroup>
    );
  }

  return null;
}

function Acculator(props) {
  let add = 0;

   return props.acculator.reduce((acc, cur) => parseInt(acc, 10) + parseInt(cur, 10), 0)

  // for (let x in props.acculator) {
  //   debugger
  //   add += x;
  //   console.log(add);
  // }
  // return add;
}

class App extends React.Component {

  constructor(props) {
    super(props);
//    var result = [];
    this.state = {page : 1, value : 0, result : []}
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(

       {value : 0, page: ++this.state.page, result : [...this.state.result, this.state.value]}
    );
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  
  render() {

    if (this.state.page < 6) {
      return (
        <div>
          <Question question={this.state.page} onChange={this.handleChange}/>
          <button onClick={this.handleClick}>
            {this.state.page < 5 ? "下一页" : "提交"}
          </button>
        </div>
      );
    }


    return (
      <div>
        <Acculator acculator = {this.state.result} />      
      </div>
    );
  }
}



export default App;
