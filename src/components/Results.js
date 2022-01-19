import { Component } from 'react'
import PropTypes from 'prop-types'
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

    getBookmarks() {
        let ids = Object.keys(localStorage)
        return ids.map(id => {
            return JSON.parse(localStorage.getItem(id))
        })
    }

    addBookmarks = (schools, bookmarks) => {
        let bookmarkIds = bookmarks.map(bookmark => bookmark.id)
        return schools.map(school => {
            school['isBookmarked'] = bookmarkIds.includes(school['id'])
            return school
        })
    }
    
    async getData () {
        let schools = await fetchData(this.props.usState, this.props.size)
            .catch(err => 'error?')
        if (schools.statusText) {
            this.setState({
                error: schools,
                loading: false
            })
        } else {
            let localBookmarkedSchools = this.getBookmarks()
            let bookmarkAddedSchools = this.addBookmarks(schools, localBookmarkedSchools)
    
            this.setState({
                bookmarkedSchools: localBookmarkedSchools,
                schools: bookmarkAddedSchools, 
                loading: false})
        }
    }

    getHeading() {
        let numberOfSchools = this.state.schools.length
        let s = (numberOfSchools === 1) ? '' : 's'
        let schoolSizes = this.props.size

        let sizeOfSchools = (schoolSizes.length === 1) ? schoolSizes[0] 
            : (schoolSizes.length === 2) ? `${schoolSizes[0]} and ${schoolSizes[1]}`
            : ''

        let message = (this.props.content === 'saved') ? `${numberOfSchools} saved school(s)` : `${numberOfSchools} ${sizeOfSchools} school${s} in ${this.props.usState}`
        return message
    }

    toggleBookmark(id) {
        let bookmarkedSchool = this.state.schools.find((school, i) => {
            return school.id === id})
        bookmarkedSchool.isBookmarked = !bookmarkedSchool.isBookmarked
        localStorage.getItem(`${id}`) ? 
            localStorage.removeItem(`${id}`) : 
            localStorage.setItem(`${id}`, JSON.stringify(bookmarkedSchool))
        let updatedSchools = this.state.schools
        this.setState({schools: updatedSchools})
    }

    navToSaved() {
        let localBookmarkedSchools = this.getBookmarks()
        this.setState({
            schools: localBookmarkedSchools,
            bookmarkedSchools: localBookmarkedSchools,
            loading: false
        })
    }

    componentDidMount() {
        this.props.content === 'results' && this.getData()
        this.props.content === 'saved' && this.navToSaved()
    }
    
    render() {
        let heading = this.getHeading()
        // Handle navigation to this page without setting search criteria
        return (
            <div className='results'>
                {this.state.loading ? 
                    <AiOutlineLoading3Quarters className='loading'/> :
                    this.state.error ? <h3 className='heading'>There was an issue. Please check your internet connection and try again!</h3> :
                        <div className='results-list'>
                            <h3 className='heading'>{heading}</h3>
                            <Schools schoolList={this.state.schools} changeBookmark={(id) => this.toggleBookmark(id)}/>
                            <Link to='/saved' className='view-saved-btn' ><GoBookmark onClick={() => this.navToSaved()}/></Link>
                            <Link to='/' className='edit-btn' ><FaEdit /></Link>
                        </div>
                }
                
            </div>
        )
    }
}

export default Results

Results.propTypes = {
    content: PropTypes.string,
    usState: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}



