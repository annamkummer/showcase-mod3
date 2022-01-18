import { makePercent } from '../utils.js'
import { Link } from 'react-router-dom'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { FaExternalLinkAlt } from 'react-icons/fa'
import '../css/School.css'


const School = ({ id, name, enrolled, website, womenEnrolledPercent, menGradRate, womenGradRate, changeBookmark, isBookmarked }) => {

    return (
        <div className='school'>
            <header className='school-header'>
                <h4 className='school-name' >{name}</h4>
                {isBookmarked ? 
                    <BsBookmarkFill className='bookmark' onClick={() => changeBookmark(id)} /> :
                    <BsBookmark className='bookmark' onClick={() => changeBookmark(id)} />
                }
            </header>
            <a href={website} rel='noreferrer' target='_blank' className='detail url'><FaExternalLinkAlt /></a>
            <p className='detail enrollment' >Total enrollment: {enrolled}</p>
            <p className='detail' >Percent women enrolled: <span className='bold'>{makePercent(womenEnrolledPercent)}%</span></p>
            <p className='detail' >Graduation rate for men: <span className='bold'>{makePercent(menGradRate)}%</span></p>
            <p className='detail' >Graduation rate for women: <span className='bold'>{makePercent(womenGradRate)}%</span></p>
        </div>
    )
}

export default School

