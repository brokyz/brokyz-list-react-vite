import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions/todos'
import { nanoid } from 'nanoid'

class Header extends Component {
  addTodo = event => {
    if (event.keyCode !== 13) return
    const todo = { id: nanoid(), value: event.target.value, done: false }
    axios
      .post(
        `http://192.144.138.47:3000/post/brokyzList/addTodo?value=${todo.value}&done=${todo.done}&id=${todo.id}`
      )
      .then(() => {
        this.props.addTodo(todo)
      })
    event.target.value = ''
  }

  render() {
    return (
      <div className='todo-header'>
        <input
          onKeyUp={this.addTodo}
          type='text'
          placeholder='请输入你的任务名称，按回车键确认'
        />
      </div>
    )
  }
}

export default connect(state => ({}), { addTodo })(Header)
