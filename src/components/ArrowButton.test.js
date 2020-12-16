import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import ArrowButton from './ArrowButton'

describe('ArrowButton', () => {
    it('shows the text', () => {
        const { getByText } = render(<ArrowButton>Test</ArrowButton>)
        expect(getByText(/Test/)).toBeInTheDocument()
    })

    it('calls given function', () => {
        const newSearch = jest.fn()
        const { getByText } = render(
            <ArrowButton onClick={newSearch}>Neue Suche</ArrowButton>
        )

        const button = getByText('Neue Suche')
        user.click(button)
        expect(newSearch).toHaveBeenCalledTimes(1)
    })
})
