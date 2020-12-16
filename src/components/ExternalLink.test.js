import { render } from '@testing-library/react'
import ExternalLink from './ExternalLink'

describe('ExternalLink', () => {
    it('renders with text', () => {
        const { getByText } = render(
            <ExternalLink>Bundesregierung</ExternalLink>
        )
        expect(getByText('Bundesregierung')).toBeInTheDocument()
    })
})
