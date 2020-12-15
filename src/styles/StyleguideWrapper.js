import React from 'react'
import GlobalStyle from './GlobalStyle'

export default function StyleguideWrapper({ children }) {
    return (
        <div>
            <GlobalStyle />
            {children}
        </div>
    )
}
