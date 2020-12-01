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
                        <div className="question-wrapper">
                            <dt>{question.question}</dt>
                            <button>
                                {question.isAnswerHidden ? (
                                    <Plus
                                        id={question.id}
                                        onClick={() =>
                                            toggleAnswer(question.id)
                                        }
                                        className="plus-icon"
                                    />
                                ) : (
                                    <Minus
                                        id={question.id}
                                        onClick={() =>
                                            toggleAnswer(question.id)
                                        }
                                        className="minus-icon"
                                    />
                                )}
                            </button>
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

    h3 {
        margin-bottom: 10px;
        margin-left: 10px;
        color: var(--lightblack);
    }

    dt {
        margin: 12px 15px 10px 15px;
        font-size: 20px;
    }

    dd {
        padding: 10px 20px 30px 20px;
        line-height: 1.3;
        font-size: 16px;
    }

    button {
        background: transparent;
        border: none;
        margin-right: 15px;
    }

    .question-answer-wrapper {
        padding-bottom: 20px;
    }

    .question-wrapper {
        border: 2px solid var(--FAQgray);
        //background: var(--FAQgray);
        display: flex;
        justify-content: space-between;
        align-items: center;
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
