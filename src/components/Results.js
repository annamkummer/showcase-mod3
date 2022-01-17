import { Component } from 'react'
import fetchData from '../fetch'
import Schools from './Schools'
import '../css/Results.css';

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            schools: ['testA', 'testB', 'testC'],
        }
    }

    componentDidMount() {
        const fetchedSchools = fetchData(this.props.usState, this.props.size)
        this.setState({schools: fetchedSchools})
    }

    render() {
        const { content, usState, size, schools } = this.props
        // Handle navigation to this page without setting search criteria
        return (
            <div className='results'>
                {/* <h3>{this.state.schools.length} schools in {usState} with {size} students</h3>
                <Schools schoolList={this.state.schools}/> */}
                <button>Edit search</button>
                <button>View saved</button>
            </div>
        )
    }
}

export default Results
