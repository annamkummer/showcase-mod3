import { Component } from 'react'
import { Link } from 'react-router-dom'
import fetchData from '../fetch'
import Schools from './Schools'
import '../css/Results.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import { GoBookmark } from 'react-icons/go'


class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            schools: [],
            loading: true
        }
    }

    async getData () {
        let schools = await fetchData(this.props.usState, this.props.size)
        this.setState({schools: schools, loading: false})
    }

    getHeading() {
        let numberOfSchools = this.state.schools.length
        let s = (numberOfSchools === 1) ? '' : 's'
        let schoolSizes = this.props.size

        let sizeOfSchools = (schoolSizes.length === 1) ? schoolSizes[0] 
            : (schoolSizes.length === 2) ? `${schoolSizes[0]} and ${schoolSizes[1]}`
            : ''

        return `${numberOfSchools} ${sizeOfSchools} school${s} in ${this.props.usState}`
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        const { content, usState, size, schools } = this.props
        let heading = this.getHeading()
        // Handle navigation to this page without setting search criteria
        return (
            <div className='results'>
                {/* <h3>{this.state.schools.length} schools in {usState} with {size} students</h3>
                <Schools schoolList={this.state.schools}/> 
                <button>Edit search</button>
                <button>View saved</button> */}
                {this.state.loading ? 
                    <AiOutlineLoading3Quarters className='loading'/> :
                    <div className='results-list'>
                        <h3>{heading}</h3>
                        <Link to='/saved' className='view-saved-btn' ><GoBookmark /></Link>
                        <Link to='/' className='edit-btn' ><FaEdit /></Link>
                    </div>
                }
                
            </div>
        )
    }
}

export default Results
