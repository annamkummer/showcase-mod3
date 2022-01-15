import { Component } from 'react'
import Schools from './Schools'
import '../css/Results.css';

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            schools: ['testA', 'testB', 'testC'],
        }
    }

    render() {
        const { usState, size } = this.props
        // Handle navigation to this page without setting search criteria
        return (
            <div className='results'>
                <h3>{this.state.schools.length} schools in {usState} with {size} students</h3>
                <Schools schoolList={this.state.schools}/>
                <button>Edit search</button>
                <button>View saved</button>
            </div>
        )
    }
}

export default Results
