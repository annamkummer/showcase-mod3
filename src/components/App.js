import { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Results from './Results'
import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      usState: '',
      size: '',
      savedSchools: []
    }
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/results' element={<Results />}/>
          <Route path='/saved' element={<Results />}/>
        </Routes>
      </div>
    )
  }
}

export default App;
