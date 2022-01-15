import { stateAbbrevs } from '../stateAbbrevs.js'
import '../css/Form.css'

const Form = () => {
    let states = stateAbbrevs.map(stateAbbrev => {
        return <option key={stateAbbrev} value="stateAbbrev">{stateAbbrev}</option>
    })

    return (
        <div className='form'>
            <select name='states'>
                {states}
            </select>
            <div className='size'>
                <label>
                    <input type='checkbox' />
                    Small
                </label>
                <label>
                    <input type='checkbox' />
                    Medium
                </label>
                <label>
                    <input type='checkbox' />
                    Large
                </label>
            </div>
        </div>
    )
}

export default Form