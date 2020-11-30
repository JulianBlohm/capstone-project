import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import data from '../data/faqData.json'
import { ReactComponent as Plus } from '../assets/plus.svg'

function FAQ() {
    const [questions, setQuestions] = useState([
        {
            id: '',
            question: '',
            answer: '',
            isAnswerHidden: true,
        },
    ])

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
                    <div key={question.id} className="question-answer-pair">
                        <div className="question-wrapper">
                            <dt>{question.question}</dt>
                            <button>
                                <Plus
                                    id={question.id}
                                    onClick={() => toggleAnswer(question.id)}
                                    className="plus-icon"
                                />
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
    color: var(--lightblack);

    h3 {
        margin-bottom: 10px;
        margin-left: 10px;
    }

    .question-answer-pair {
        padding-bottom: 20px;
    }

    .question-wrapper {
        background: var(--FAQgray);
        display: flex;
        position: relative;
    }

    dt {
        margin: 10px 45px 10px 20px;
    }

    button {
        background: transparent;
        border: none;
        position: absolute;
        top: 4px;
        right: 15px;
    }

    .plus-icon {
        width: 30px;
        stroke: var(--blue);
    }

    dd {
        padding: 10px 15px 30px 20px;
    }
`

export default FAQ
