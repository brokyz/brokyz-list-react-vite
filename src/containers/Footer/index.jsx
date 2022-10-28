import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { updateAllTick } from '../../redux/actions/todos'
import axios from 'axios'

class Footer extends Component {
  todosSum = () => {
    return this.props.todos.length
  }
  finished = () => {
    const finished = this.props.todos.filter(todo => {
      return todo.done
    })
    return finished.length
  }
  tickAll = event => {
    const done = event.target.checked
    const todos = this.props.todos.map(todo => {
      return { ...todo, done }
    })

    axios
      .post(`http://192.144.138.47:3000/post/brokyzList/tickAll?done=${done}`)
      .then(() => {
        this.props.updateAllTick(todos)
      })
  }
  removeTicked = () => {
    const todos = this.props.todos.filter(todo => {
      return !todo.done
    })
    axios
      .post('http://192.144.138.47:3000/post/brokyzList/removeAllTick')
      .then(() => {
        this.props.updateAllTick(todos)
      })
  }
  render() {
    return (
      <div className='todo-footer'>
        <label>
          <input
            type='checkbox'
            checked={
              this.finished() === this.todosSum() && this.todosSum() !== 0
            }
            onChange={this.tickAll}
          />
        </label>
        <span>
          <span>
            已完成{this.finished()} / 全部{this.todosSum()}
          </span>
        </span>
        <button onClick={this.removeTicked} className='btn btn-danger'>
          清除已完成任务
        </button>
      </div>
    )
  }
}

export default connect(state => ({ todos: state.todos }), { updateAllTick })(
  Footer
)
