import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Form from './Form'

describe('Form', () => {
    it('shows input and button', () => {
        const { getByPlaceholderText, getByText } = render(<Form />)
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        expect(input).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it('submits with button click', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'Hamburg')
        user.click(button)

        expect(startSearch).toHaveBeenCalledWith('Hamburg')
    })

    it('calls function with valid string', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'Hamburg')
        user.click(button)

        expect(startSearch).toHaveBeenCalledWith('Hamburg')
    })

    it('calls function with valid zip code', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, '22303')
        user.click(button)

        expect(startSearch).toHaveBeenCalledWith('22303')
    })

    it('calls function with valid special characters', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'Rotenburg-Wümme')
        user.click(button)

        expect(startSearch).toHaveBeenCalledWith('Rotenburg-Wümme')
    })

    it('doesnt call function with one or less characters', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'A')
        user.click(button)

        expect(startSearch).toHaveBeenCalledTimes(0)
    })

    it('doesnt call function with 33 or more characters', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-ABCDEF')
        user.click(button)

        expect(startSearch).toHaveBeenCalledTimes(0)
    })

    it('doesnt call function with invalid number (1)', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, '2230')
        user.click(button)

        expect(startSearch).toHaveBeenCalledTimes(0)
    })

    it('doesnt call function with invalid number (2)', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, '223034')
        user.click(button)

        expect(startSearch).toHaveBeenCalledTimes(0)
    })

    it('doesnt call function with invalid characters', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, '{console.log(test)}')
        user.click(button)

        expect(startSearch).toHaveBeenCalledTimes(0)
    })

    it('doesnt call function with invalid mix of numbers and characters', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'hamburg22303')
        user.click(button)

        expect(startSearch).toHaveBeenCalledTimes(0)
    })

    it('calls function with trimmed value', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, '      hamburg           ')
        user.click(button)

        expect(startSearch).toHaveBeenCalledWith('hamburg')
    })

    it('resets input value with submit', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'Hannover')
        user.click(button)

        expect(input).toHaveValue('')
    })

    it('doesnt reset input value with invalid value', () => {
        const startSearch = jest.fn()

        const { getByPlaceholderText, getByRole } = render(
            <Form startSearch={startSearch} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        user.type(input, 'Hannover123')

        const button = getByRole('button', { name: /cross/i })
        user.click(button)

        expect(input).toHaveValue('')
    })
})
