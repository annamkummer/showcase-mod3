import { Link } from 'react-router-dom'
import '../css/Error.css';

const Error = () => {
    return (
        <div className='home'>
            <h1 className='title'>Hmm, can't seem to find that page.</h1>
            <Link to='/' className='edit-btn' >Home</Link>
        </div>
    )
}

export default Error