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
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'Hamburg')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledWith('Hamburg')
    })

    it('calls function with valid string', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'Hamburg')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledWith('Hamburg')
    })

    it('calls function with valid zip code', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, '22303')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledWith('22303')
    })

    it('calls function with valid special characters', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'Rotenburg-Wümme')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledWith('Rotenburg-Wümme')
    })

    it('doesnt call function with one or less characters', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'A')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledTimes(0)
    })

    it('doesnt call function with 33 or more characters', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-ABCDEF')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledTimes(0)
    })

    it('doesnt call function with invalid number (1)', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, '2230')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledTimes(0)
    })

    it('doesnt call function with invalid number (2)', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, '223034')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledTimes(0)
    })

    it('doesnt call function with invalid characters', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, '{console.log(test)}')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledTimes(0)
    })

    it('doesnt call function with invalid mix of numbers and characters', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'hamburg22303')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledTimes(0)
    })

    it('calls function with trimmed value', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, '      hamburg           ')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledWith('hamburg')
    })

    it('calls function with space behind value if it matches the old value', () => {
        const setUserPlace = jest.fn()
        const userPlace = 'bremen'

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} userPlace={userPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'bremen')
        user.click(button)

        expect(setUserPlace).toHaveBeenCalledWith('bremen ')
    })

    it('resets input value with submit', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByText } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        const button = getByText(/Suchen/)

        user.type(input, 'Hannover')
        user.click(button)

        expect(input).toHaveValue('')
    })

    it('doesnt reset input value with invalid value', () => {
        const setUserPlace = jest.fn()

        const { getByPlaceholderText, getByRole } = render(
            <Form setUserPlace={setUserPlace} />
        )
        const input = getByPlaceholderText(/Ort oder PLZ eingeben.../)
        user.type(input, 'Hannover123')

        const button = getByRole('button', { name: /cross/i })
        user.click(button)

        expect(input).toHaveValue('')
    })
})
