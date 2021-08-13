import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;

`
export const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    margin-top: 0.5em;
    color: #bf1733;
    font-weight: 700;
`
export const Subtitle = styled.h2`
    font-weight: 700;
    font-size: 1.5em;
    color: #17bf8f;
    text-align: center;
    margin-bottom: 2em;
`
export const Text = styled.h3`
    width: 25%; 
    color: #dea431;
    border: 1px solid #b942ff;

    padding: 1em 1em;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2em;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    background: #b942ff;
    color: white;
    padding: 0.5em 1em;
    border: none;
    margin: 0 0.5em;
    cursor: pointer;
    font-size: 1em;
    width: 120px;
    font-weight: 700;

    &:hover{
        background: #17bf8f;
    }
`

