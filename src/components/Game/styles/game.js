import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
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

    @media(max-width: 950px){
        font-size: 3em;
    }
`
export const Subtitle = styled.h2`
    font-weight: 700;
    font-size: 1.5em;
    color: #17bf8f;
    text-align: center;
    margin-bottom: 2em;

    @media(max-width: 950px){
        line-height: 1.8;
        font-size: 1em;
    }
`
export const Text = styled.h3`
    width: 250px; 
    color: #dea431;
    border: 2px solid #b942ff;
    padding: 1em 1em;
    text-align: center;
    margin: 0 auto;
    

    @media(max-width: 950px){
        width: 150px;
        padding: .5em .5em;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    background: url(${ ({ src }) => src }) no-repeat center ;
    background-blend-mode: screen;
    background-size: cover;
    color: white;
    width:100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 0.5em;
    cursor: pointer;
    font-size: 1em;   
    font-weight: 700;

    &:hover{
        color: #17bf8f;
        border: 2px solid #17bf8f;
        
    }

    @media(max-width: 950px){
        margin-top: 2em;
    }
`
export const Image = styled.div`
    background: url(${ ({ src }) => src }) no-repeat center;
    background-size: cover;
    width:250px;
    height: 250px;
    transform: ${({ isPlayer })=>(isPlayer ? 'rotate(90deg)' : 'rotate(-90deg)')};
    border: 2px solid white;
    border-radius: 10%;

    @media(max-width: 950px){
        width: 125px;
        height: 125px;
    }
`

export const SmallText = styled.p`
    color: #b942ff;
    font-size: 0.5rem;   
    font-weight: 400;
    text-align: center;
    margin-bottom: 0;

    @media(max-width: 950px){
        margin-top: 3em;
        font-size: 0.3rem;
    }
`



