import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import data from '../data/faqData.json'
import { ReactComponent as Plus } from '../assets/plus.svg'
import { ReactComponent as Minus } from '../assets/minus.svg'

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
            <h3>FAQ</h3>
            {questions.map((question) => (
                <>
                    <div key={question.id} className="question-answer-wrapper">
                        <div
                            className="question-wrapper"
                            onClick={() => toggleAnswer(question.id)}
                        >
                            <dt>{question.question}</dt>
                            {question.isAnswerHidden ? (
                                <Plus id={question.id} className="plus-icon" />
                            ) : (
                                <Minus
                                    id={question.id}
                                    className="minus-icon"
                                />
                            )}
                        </div>

                        {!question.isAnswerHidden && (
                            <dd key={question.id}>{question.answer}</dd>
                        )}
                    </div>
                </>
            ))}
        </FAQWrapper>
    )
}

const FAQWrapper = styled.dl`
    color: var(--gray);
    padding: 30px 0;

    h3 {
        font-size: 32px;
        margin-bottom: 10px;
        margin-left: 15px;
        color: var(--lightblack);
    }

    dt {
        font-size: 20px;
        max-width: 90%;
    }

    dd {
        padding: 30px 20px 30px 20px;
        line-height: 1.3;
        font-size: 16px;
    }

    .question-wrapper {
        background: transparent;
        border-top: 2px solid var(--FAQgray);
        border-bottom: 2px solid var(--FAQgray);
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
    }

    .question-answer-wrapper {
        padding-bottom: 20px;
    }

    .plus-icon {
        width: 30px;
        stroke: var(--blue);
    }

    .minus-icon {
        width: 30px;
        stroke: var(--blue);
    }
`

export default FAQ
