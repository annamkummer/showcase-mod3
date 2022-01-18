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
      size: [],
    }
  }

  setSearchCriteria(e, form) {
    e.preventDefault()
    let selectedSizes = []
    form.small && selectedSizes.push('small')
    form.medium && selectedSizes.push('medium')
    form.large && selectedSizes.push('large')
    this.setState({
      usState: form.usState,
      size: selectedSizes
    })
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home submit={(e, form) => this.setSearchCriteria(e, form)}/>}/>
          <Route path='/results' element={<Results content='results' usState={this.state.usState} size={this.state.size} />}/>
          <Route path='/saved' element={<Results content='saved' usState='n/a' size='n/a' schools={this.state.savedSchools}/>}/>
        </Routes>
      </div>
    )
  }
}

export default App;
