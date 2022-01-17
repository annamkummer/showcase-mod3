import { Link } from 'react-router-dom'
import { GoBookmark } from 'react-icons/go'
import Form from './Form'
import '../css/Home.css';

const Home = ({ submit }) => {
    return (
        <div className='home'>
            <h1 className='title'>Showcase</h1>
            <Form submit={submit}/>
            <Link to='/saved' className='view-saved-btn' ><GoBookmark /></Link>
        </div>
    )
}

export default Home