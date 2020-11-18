import Button from './Button'
import Input from './Input'


function Form({userInput, setUserInput, setCounty}) {
    
    function handleChange(event) {
        setUserInput(event.target.value);
    }

    function sendForm(event) {
        event.preventDefault()
        setCounty(userInput)
        setUserInput('')
    }
    
return (
            <form onSubmit={sendForm}>
                <Input 
                    value={userInput}
                    onChange= {handleChange} 
                    placeholderText="Gib deinen Landkreis ein..."/>
                <Button text="Suchen"/>
            </form>
)
}

export default Form