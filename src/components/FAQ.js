import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import data from '../data/faqData.json'
import { ReactComponent as Plus } from '../assets/plus.svg'

function FAQ() {
    const [faqContent, setFaqContent] = useState([])

    useEffect(() => setFaqContent(data), [])

    return (
        <FAQWrapper>
            {faqContent.map((content, index) => (
                <>
                    <div className="question-answer-pair">
                        <div className="question-wrapper">
                            <dt key={index}>{content.question}</dt>
                            <button>
                                <Plus className="plus-icon" />
                            </button>
                        </div>
                        <dd key={index}>{content.answer}</dd>
                    </div>
                </>
            ))}
        </FAQWrapper>
    )
}

const FAQWrapper = styled.dl`
    .question-answer-pair {
        padding-bottom: 20px;
    }

    .question-wrapper {
        background: var(--FAQgray);
        display: flex;
        position: relative;
        color: var(--lightblack);
    }

    dt {
        font-weight: 700;
        margin: 10px 45px 10px 10px;
    }

    button {
        background: transparent;
        border: none;
        position: absolute;
        top: 4px;
        right: 5px;
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
