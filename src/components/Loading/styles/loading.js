import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #505A62;
    width: 100%;
    height: 100vh;
`

const loading = keyframes`
    0% {
        max-width: 0;
        color: #FF5D5D;
    }
`

export const Text = styled.h1`
    position: relative;
    color: rgba(0, 0, 0, 0.05);
    text-align: center;
    font-size: 5em;
    margin: auto;
    width: 100%;

    &:before {
        content: attr(data-text);
        position: absolute;
        overflow: hidden;
        max-width: 7em;
        white-space: nowrap;
        color: #ADFC90;
        animation: ${loading} 1.5s linear infinite alternate;
    }
`