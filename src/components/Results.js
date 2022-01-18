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
            bookmarkedSchools: [],
            loading: true
        }
    }

    async getData () {
        let schools = await fetchData(this.props.usState, this.props.size, this.state.bookmarkedSchools)
        this.setState({schools: schools, loading: false})
    }

    getBookmarks() {
        let bookmarkedSchools = []
        let ids = Object.keys(localStorage)
        ids.forEach(id => {
            bookmarkedSchools.push(JSON.parse(localStorage.getItem(id)))
        })
        this.setState({bookmarkedSchools})
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

    toggleBookmark(id) {
        let index;
        let bookmarkedSchool = this.state.schools.find((school, i) => {
            index = i
            return school.id === id})
        localStorage.getItem(`${id}`) ? 
            localStorage.removeItem(`${id}`) : 
            localStorage.setItem(`${id}`, JSON.stringify(bookmarkedSchool))

        let schools = this.state.schools
        schools[index].isBookmarked = !schools[index].isBookmarked
        
        this.setState({schools})
    }

    componentDidMount() {
        this.getBookmarks()
        console.log(this.state.bookMarkedSchools)
        this.getData()
    }

    render() {
        const { content, usState, size } = this.props
        let heading = this.getHeading()
        console.log('rendering')
        // Handle navigation to this page without setting search criteria
        return (
            <div className='results'>
                {this.state.loading ? 
                    <AiOutlineLoading3Quarters className='loading'/> :
                    <div className='results-list'>
                        <h3>{heading}</h3>
                        <Schools schoolList={this.state.schools} changeBookmark={(id) => this.toggleBookmark(id)}/>
                        <Link to='/saved' className='view-saved-btn' ><GoBookmark /></Link>
                        <Link to='/' className='edit-btn' ><FaEdit /></Link>
                    </div>
                }
                
            </div>
        )
    }
}

export default Results
