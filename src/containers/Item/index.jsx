import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { removeTodo, changeTick } from '../../redux/actions/todos'
import axios from 'axios'

class Item extends Component {
  removeTodo = () => {
    const { id } = this.props.todo
    axios
      .post(`http://192.144.138.47:3000/post/brokyzList/removeTodo?id=${id}`)
      .then(() => {
        this.props.removeTodo(id)
      })
  }
  changeTick = event => {
    const { id } = this.props.todo
    const data = { id, done: event.target.checked }

    axios
      .post(
        `http://192.144.138.47:3000/post/brokyzList/changeTick?id=${data.id}&done=${data.done}`
      )
      .then(v => {
        this.props.changeTick(data)
        // this.forceUpdate()
      })
  }
  render() {
    const { value, done } = this.props.todo
    return (
      <li>
        <label>
          <input type='checkbox' checked={done} onChange={this.changeTick} />
          <span>{value}</span>
        </label>
        <button onClick={this.removeTodo} className='btn btn-danger'>
          删除
        </button>
      </li>
    )
  }
}
export default connect(state => ({}), { removeTodo, changeTick })(Item)
