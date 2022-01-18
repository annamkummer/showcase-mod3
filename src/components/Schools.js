import School from './School'
import '../css/Schools.css'

const Schools = ({ schoolList }) => {
    let schools = (!schoolList.length) ? 
        'There are no schools that match that search. Please try again!' : 
        schoolList.map(school => {
            return <School 
                key={school['id']} 
                name={school['school.name']}
                enrolled={school['latest.student.size']}
                website={school['school.school_url']}
                womenEnrolledPercent={school['latest.student.demographics.women']}
                menGradRate={school['latest.completion.title_iv.male.completed_by.6yrs']}
                womenGradRate={school['latest.completion.title_iv.female.completed_by.6yrs']}
            />
        })

    return (
        <div className='schools'>
            {schools}
        </div>
    )
}

export default Schools
