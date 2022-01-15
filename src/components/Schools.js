import School from './School'
import '../css/Schools.css'

const Schools = ({ schoolList }) => {
    let schools = schoolList.map((school, i) => {
        return <School key={i} name={school}/>
    })

    return (
        <div className='schools'>
            {schools}
        </div>
    )
}

export default Schools