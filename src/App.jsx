import './App.css'
import React, { Component } from 'react'
import Header from './containers/Header'
import List from './containers/List'
import Footer from './containers/Footer'

export default class App extends Component {
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <h2 className='title'>brokyzList</h2>
          <Header></Header>
          <List></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
