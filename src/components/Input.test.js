import Input from './Input'
import { render } from '@testing-library/react'

describe('Input', () => {
    it('shows the text', () => {
        const { getByPlaceholderText } = render(
            <Input placeholderText="Test" />
        )
        expect(getByPlaceholderText(/Test/)).toBeInTheDocument()
    })
})