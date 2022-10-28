import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
import { connect } from 'react-redux'
import axios from 'axios'
import { getTodos } from '../../redux/actions/todos'

class List extends Component {
  componentDidMount() {
    axios.get('http://192.144.138.47:3000/get/brokyzList/todos').then(todos => {
      todos.data.forEach(todo => {
        todo.done == 'true' ? (todo.done = true) : (todo.done = false)
      })
      this.props.getTodos(todos.data)
    })
  }
  render() {
    return (
      <ul className='todo-main'>
        {this.props.todos.map(todo => {
          return <Item todo={todo} key={todo.id}></Item>
        })}
      </ul>
    )
  }
}

export default connect(
  state => ({
    todos: state.todos,
  }),
  { getTodos }
)(List)
