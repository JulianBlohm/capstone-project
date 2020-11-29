import styled from 'styled-components/macro'

export default function LoadingSpinner() {
    return (
        <LoadingWrapper>
            <div class="loading-spinner">
                <div></div>
                <div></div>
            </div>
        </LoadingWrapper>
    )
}

const LoadingWrapper = styled.div`
    .loading-spinner {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }

    .loading-spinner div {
        position: absolute;
        border: 4px solid var(--blue);
        opacity: 1;
        border-radius: 50%;
        animation: loading-spinner 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    .loading-spinner div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes loading-spinner {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }
`
