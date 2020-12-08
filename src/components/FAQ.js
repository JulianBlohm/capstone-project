import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import data from '../data/faqData.json'
import { PlusIcon, MinusIcon } from '../lib/Icons'

function FAQ() {
    const [questions, setQuestions] = useState([])

    useEffect(
        () =>
            setQuestions(
                data.map((question) => {
                    return { ...question, isAnswerHidden: true }
                })
            ),
        []
    )

    function toggleAnswer(id) {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? { ...question, isAnswerHidden: !question.isAnswerHidden }
                    : question
            )
        )
    }

    return (
        <FAQWrapper>
            <Heading>FAQ</Heading>
            {questions.map((question) => (
                <div key={question.id}>
                    <QuestionWrapper onClick={() => toggleAnswer(question.id)}>
                        <Question>{question.question}</Question>
                        {question.isAnswerHidden ? (
                            <PlusStyled id={question.id} />
                        ) : (
                            <MinusStyled id={question.id} />
                        )}
                    </QuestionWrapper>

                    {!question.isAnswerHidden && (
                        <Answer key={question.id}>{question.answer}</Answer>
                    )}
                </div>
            ))}
        </FAQWrapper>
    )
}

const FAQWrapper = styled.dl`
    color: var(--gray);
    margin: 70px 30px;
`

const Heading = styled.h3`
    font-size: 2rem;
    margin-bottom: 10px;
    color: var(--lightblack);
`

const Question = styled.dt`
    font-size: 1.25rem;
    max-width: 90%;
`

const Answer = styled.dd`
    padding: 30px 20px 30px 20px;
    line-height: 1.3;
    font-size: 1rem;
`

const QuestionWrapper = styled.div`
    background: transparent;
    border-top: 2px solid var(--FAQgray);
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5px;
`

const PlusStyled = styled(PlusIcon)`
    width: 30px;
    stroke: var(--blue);
`

const MinusStyled = styled(MinusIcon)`
    width: 30px;
    stroke: var(--blue);
`

export default FAQ
