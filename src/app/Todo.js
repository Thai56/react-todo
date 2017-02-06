import React, { Component } from 'react';
export class Todo extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos:[],
      newTodo:''
    }
  }

  handleClick(e){
    e.preventDefault()
    const todos = [...this.state.todos,this.input.value]
    this.input.value='';
    this.setState({todos})
  }
  handleChange(e){
    const {value} = e.target;
    this.setState({newTodo:value})
  }
  remove(i){
    const todos = [...this.state.todos.slice(0,i),...this.state.todos.slice(i+1)]
    this.setState({todos})
  }
  render() {
    return (
      <div>
        <form>
          <input ref={node => this.input = node}/>
          <button onClick={this.handleClick.bind(this)}>click</button>
        </form>
        <ul>
          {this.state.todos.map((todo,i)=>{
             return (
               <li
                 onClick={()=>{this.remove.call(this,i)}}
                 key={i}>{todo}</li>
             )
           })}
        </ul>
      </div>
    );
  }
}
