import Button from './Button'
import { render } from '@testing-library/react'

describe('Button', () => {
    it('shows the text', () => {
        const { getByText } = render(
            <Button text="Test" />
        )
        expect(getByText(/Test/)).toBeInTheDocument()
    })
})