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
        let localBookmarkedSchools = this.getBookmarks()
        let bookmarkAddedSchools = this.addBookmarks(schools, localBookmarkedSchools)

        this.setState({
            bookmarkedSchools: localBookmarkedSchools,
            schools: bookmarkAddedSchools, 
            loading: false})
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
        let bookmarkedSchool = this.state.schools.find((school, i) => {
            return school.id === id})
        bookmarkedSchool.isBookmarked = !bookmarkedSchool.isBookmarked
        localStorage.getItem(`${id}`) ? 
            localStorage.removeItem(`${id}`) : 
            localStorage.setItem(`${id}`, JSON.stringify(bookmarkedSchool))
        let updatedSchools = this.state.schools
        this.setState({schools: updatedSchools})
    }

    componentDidMount() {
        this.props.content === 'results' && this.getData()
        if (this.props.content === 'saved') {
            let localBookmarkedSchools = this.getBookmarks()
            this.setState({
                schools: localBookmarkedSchools,
                bookmarkedSchools: localBookmarkedSchools,
                loading: false
            })
        } 
    }
    
    render() {
        const { content, usState, size } = this.props
        let heading = this.getHeading()
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

/*

1 - Pull bookmarked schools from localStorage (should start with none)
2 - Fetch schools and set isBookmarked status on each 
3 - When bookmark icon is clicked, 
-- a) toggle isBookmarked status
-- b) add or remove from local storage based on whether or not it's already there
-- c) re-render so that opposite bookmark icon shows
4 - When SavedSchools icon is clicked, display only and all bookmarked schools

*/