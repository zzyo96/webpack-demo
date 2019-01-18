import React, { Component } from 'react';

export default class TodoInput extends Component {
  render(){
    return <input type="text" value={this.props.content}
      onChange={this.changeTitle.bind(this)}
      onKeyPress={this.submit.bind(this)}/>
  }
  submit(e){
    if (e.key === 'Enter') {
      console.log('用户按回车了');
    }
  }
  changeTitle(e){
    this.props.onChange(e)
  }
}
