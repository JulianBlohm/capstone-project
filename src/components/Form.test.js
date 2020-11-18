import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Form from './Form'

describe('Form', () => {
    it('shows input and button', () => {
    const handleUserInput = jest.fn()
    const handleSetCounty = jest.fn()
    
  
      const { getByPlaceholderText, getByText } = render(
        <Form setUserInput={handleUserInput} setCounty={handleSetCounty}/>
      )
      const userInput = getByPlaceholderText(/Gib deinen Landkreis ein.../)
      const button = getByText(/Suchen/)
  
      expect(userInput).toBeInTheDocument()
      expect(button).toBeInTheDocument()

      user.type(userInput, 'Hamburg')
      user.click(button)

      expect(handleSetCounty).toHaveBeenCalledWith(/Hamburg/)
    })
})