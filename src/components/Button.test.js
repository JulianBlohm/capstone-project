import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
    it('shows the text', () => {
        const { getByText } = render(<Button>Test</Button>)
        expect(getByText(/Test/)).toBeInTheDocument()
    })

    it('renders with gray background', () => {
        const startSearch = jest.fn()
        const { getByText } = render(
            <Button onClick={startSearch}>Suchen</Button>
        )

        const button = getByText('Suchen')
        user.click(button)
        expect(startSearch).toHaveBeenCalledTimes(1)
    })
})
