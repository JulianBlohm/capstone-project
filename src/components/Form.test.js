import { render } from '@testing-library/react'
import Form from './Form'

describe('Form', () => {
    it('shows input and button', () => {
    const handleSubmitCounty = jest.fn()
    
  
      const { getByPlaceholderText, getByText } = render(
        <Form onSubmit={handleSubmitCounty}/>
      )
      const userInput = getByPlaceholderText(/Gib deinen Landkreis ein.../)
      const button = getByText(/Suchen/)
  
      expect(userInput).toBeInTheDocument()
      expect(button).toBeInTheDocument()
    })
})