import School from './School'
import '../css/Schools.css'

const Schools = ({ schoolList }) => {
    let schools = (!schoolList.length) ? 
        'There are no schools that match that search. Please try again!' : 
        schoolList.map((school, i) => {
            return <School key={i} name={school}/>
        })

    return (
        <div className='schools'>
            {schools}
        </div>
    )
}

export default Schools