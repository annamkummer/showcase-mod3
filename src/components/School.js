import '../css/School.css'

const School = ({ name, enrolled, website, womenEnrolledPercent, menGradRate, womenGradRate }) => {
    return (
        <div className='school'>
            <h4 className='school-name' >{name}</h4>
            <p className='school-url' >Website: {website}</p>
            <p className='enrollment' >Total enrollment: {enrolled}</p>
            <p className='detail' >Percent women enrolled: {womenEnrolledPercent}</p>
            <p className='detail' >Graduation rate for men: {menGradRate}</p>
            <p className='detail' >Graduation rate for women: {womenGradRate}</p>
        </div>
    )
}

export default School

