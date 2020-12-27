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

    it('renders correctly with several questions', () => {
        const dataMock = [
            {
                id: 1,
                question: 'Was wird benutzt?',
                answer: 'Alles wird benutzt',
            },
            {
                id: 2,
                question: 'Was ist passiert?',
                answer: 'Nichts ist passiert',
            },
            {
                id: 3,
                question: 'Was ist los?',
                answer: 'Viel',
            },
        ]
        const { getByText, queryByText } = render(<FAQ data={dataMock} />)

        expect(getByText('Was wird benutzt?')).toBeInTheDocument()
        expect(getByText('Was ist passiert?')).toBeInTheDocument()
        expect(getByText('Was ist los?')).toBeInTheDocument()

        const answerText1 = queryByText('Alles wird benutzt')
        const answerText2 = queryByText('Nichts ist passiert')
        const answerText3 = queryByText('Viel')

        expect(answerText1).not.toBeInTheDocument()
        expect(answerText2).not.toBeInTheDocument()
        expect(answerText3).not.toBeInTheDocument()
    })
})
