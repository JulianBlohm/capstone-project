import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Input from './Input'

describe('Input', () => {
    it('shows the text', () => {
        const { getByPlaceholderText } = render(<Input placeholder="Test" />)
        expect(getByPlaceholderText('Test')).toBeInTheDocument()
    })

    it('shows the value', () => {
        const setUserInput = jest.fn()
        const { getByDisplayValue } = render(
            <Input onChange={setUserInput} value="Hamburg" />
        )
        expect(getByDisplayValue('Hamburg')).toBeInTheDocument()
    })

    it('calls given function with change', () => {
        const setUserInput = jest.fn()
        const { getByPlaceholderText } = render(
            <Input
                placeholder="Ort oder PLZ eingeben..."
                onChange={setUserInput}
            />
        )

        const input = getByPlaceholderText('Ort oder PLZ eingeben...')
        user.type(input, 'berlin')
        expect(setUserInput).toHaveBeenCalledTimes(6)
    })
})
