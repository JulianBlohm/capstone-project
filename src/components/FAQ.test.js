import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import FAQ from './FAQ'

describe('FAQ', () => {
    it('renders correctly', () => {
        const dataMock = [
            {
                id: 1,
                question: 'Was wird benutzt?',
                answer: 'Alles wird benutzt',
            },
        ]
        const { getByText, queryByText } = render(<FAQ data={dataMock} />)
        expect(getByText('Was wird benutzt?')).toBeInTheDocument()
        const answerText = queryByText('Alles wird benutzt')
        expect(answerText).not.toBeInTheDocument()
    })

    it('shows answer if user clicks question', () => {
        const dataMock = [
            {
                id: 1,
                question: 'Was wird benutzt?',
                answer: 'Alles wird benutzt',
            },
        ]
        const { getByText, queryByText } = render(<FAQ data={dataMock} />)

        const questionText = getByText('Was wird benutzt?')
        user.click(questionText)

        const answerText = queryByText('Alles wird benutzt')
        expect(answerText).toBeInTheDocument()
    })

    it('hides answer if user clickes second time', () => {
        const dataMock = [
            {
                id: 1,
                question: 'Was wird benutzt?',
                answer: 'Alles wird benutzt',
            },
        ]
        const { getByText, queryByText } = render(<FAQ data={dataMock} />)

        const questionText = getByText('Was wird benutzt?')
        user.click(questionText)
        user.click(questionText)

        const answerText = queryByText('Alles wird benutzt')
        expect(answerText).not.toBeInTheDocument()
    })
})
