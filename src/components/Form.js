import Button from './Button'
import Input from './Input'
import PropTypes from 'prop-types'


function Form({userInput, setUserInput, setCounty}) {
    
    function handleChange(event) {
        setUserInput(event.target.value);
    }

    function handleSubmitCounty(event) {
        event.preventDefault()
        setCounty(userInput)
        setUserInput('')
        event.target.focus()
    }
    
return (
            <form onSubmit={handleSubmitCounty}>
                <Input 
                    value={userInput}
                    onChange= {handleChange} 
                    placeholderText="Gib deinen Landkreis ein..."/>
                <Button text="Suchen"/>
            </form>
)
}

Form.propTypes = {
    userInput: PropTypes.string,
    setUserInput: PropTypes.func,
    setCounty: PropTypes.func
}

export default Form