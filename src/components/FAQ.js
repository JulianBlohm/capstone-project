import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { PlusIcon, MinusIcon } from '../lib/Icons'

function FAQ({ data }) {
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
            <ul>
                {questions.map((question) => (
                    <QaWrapper key={question.id}>
                        <QuestionWrapper
                            onClick={() => toggleAnswer(question.id)}
                        >
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
                    </QaWrapper>
                ))}
            </ul>
        </FAQWrapper>
    )
}

const FAQWrapper = styled.section`
    color: var(--gray);
    margin: 70px 20px;
`

const Heading = styled.h3`
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: 2rem;
    color: var(--lightblack);
`

const QaWrapper = styled.li`
    list-style-type: none;
`

const Question = styled.p`
    font-size: 1.25rem;
    max-width: 85%;
    margin-left: 10px;
`

const Answer = styled.p`
    padding: 30px 20px 30px 20px;
    line-height: 1.3;
    font-size: 1rem;
`

const QuestionWrapper = styled.div`
    background: transparent;
    border-top: 2px solid var(--FAQgray);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
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
