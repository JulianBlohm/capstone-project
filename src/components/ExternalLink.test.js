import { render } from '@testing-library/react'
import ExternalLink from './ExternalLink'

describe('ExternalLink', () => {
    it('renders with text', () => {
        const { getByText } = render(
            <ExternalLink>Bundesregierung</ExternalLink>
        )
        expect(getByText('Bundesregierung')).toBeInTheDocument()
    })

    it('has an href and a target', () => {
        const { getByRole } = render(
            <ExternalLink href="www.test.de" target="_blank">
                Bundesregierung
            </ExternalLink>
        )
        const link = getByRole('link')
        expect(link).toHaveAttribute('href', 'www.test.de')
        expect(link).toHaveAttribute('target', '_blank')
    })
})
