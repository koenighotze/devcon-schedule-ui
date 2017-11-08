// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import './App.css'
import Schedule from './Schedule'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://www.versicherungsforen.net/portal/media/netzwerk/unternehmenslogo/nichtversicherer/Logo_senacor_20091016.jpg' className="App-logo" alt="logo" />
          <h1 className="App-title">Devcon 2017 Schedule</h1>
        </header>
        <Schedule/>
      </div>
    )
  }
}

export default App
