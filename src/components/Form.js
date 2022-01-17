import { stateAbbrevs } from '../stateAbbrevs.js'
import { Component } from 'react'
import SelectSearch from 'react-select-search';
import { Link } from 'react-router-dom'
import '../css/Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usState: '',
            small: false,
            medium: false,
            large: false
        }
    }

    setUsState(e) {
        this.setState({usState: e})
    }

    check(e) {
        this.setState({
            [e.target.value]: e.target.checked
        })
    }

    // getStates = () => {
    //     return stateAbbrevs.map(stateAbbrev => {
    //         return <option key={stateAbbrev} value="stateAbbrev">{stateAbbrev}</option>
    //     })
    // }

    render() {
        const { submit } = this.props
        return (
            <form className='form'>
                <SelectSearch className='states' options={stateAbbrevs} placeholder='Choose a state...' onChange={(e) => this.setUsState(e)}/>
                <div className='size'>
                    <h3>Choose student body size:</h3>
                    <label>
                        <input type='checkbox' value='small' onChange={(e) => this.check(e)} />
                        Small
                    </label>
                    <label>
                        <input type='checkbox' value='medium' onChange={(e) => this.check(e)} />
                        Medium
                    </label>
                    <label>
                        <input type='checkbox' value='large' onChange={(e) => this.check(e)} />
                        Large
                    </label>
                </div>
                {/* <input className='submit-btn' type="submit" value="View Schools" onClick={(event, form) => submit(event, this.state)}/> */}
                <button className='submit-btn' onClick={(event, form) => submit(event, this.state)}>
                    <Link to='/results' className='submit-btn' >View Schools</Link>
                </button>
            </form>
        )
    }
}

export default Form