import React, { Component } from 'react';
import 'normalize.css'
import './reset.css'
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        {id:1, title:'第一个待办'},
        {id:2, title:'第二个待办'},
      ]
    }
  }
  render() {

    let todos = this.state.todoList
      .filter((item)=> !item.deleted)
      .map((item,index)=>{
      return ( 
        <li>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)} 
            onDelete={this.delete.bind(this)}/>
        </li>
      )
    })

    return (
      <div className="App">
          <h1>我的待办</h1>
          <div className="inputWrapper">
            <TodoInput content={this.state.newTodo} 
              onChange={this.changeTitle.bind(this)}
              onSubmit={this.addTodo.bind(this)} />
          </div>
          <ol>
            {todos}
          </ol>
      </div>
    )
  }
  toggle(e, todo){
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state) 
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }
  addTodo(){
    console.log('我得添加一个 todo 了')
  }
  delete(event, todo){
    todo.deleted = true
    this.setState(this.state) 
  }
}

export default App;
