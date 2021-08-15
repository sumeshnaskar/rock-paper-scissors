import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 100vh;
`
export const InnerContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media(max-width:950px){
        flex-direction: column;
        justify-content: center;
    }
`
export const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    padding-top: 0.5em;
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
        margin-bottom: 1em;
    }
`
export const Text = styled.h3`
    width: 300px; 
    color: #dea431;
    border: 2px solid #b942ff;
    padding: 1em 1em;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2em;

    &:last-child{
        margin-bottom: 0;
    }
    

    @media(max-width: 950px){
        width: 30%;
        font-size: 1em;
        padding: .25em .25em;
        margin: .5em;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media(max-width:950px){
        width: 100%;
        margin: 0.5em auto;
    }
`

export const Button = styled.button`
    background: url(${ ({ src }) => src }) no-repeat center ;
    background-blend-mode: screen;
    background-size: cover;
    color: white;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 0.75em;
    cursor: pointer;
    font-size: .65em;   
    font-weight: 700;
    margin-top: 1em;

    &:hover{
        color: #17bf8f;
        border: 2px solid #17bf8f;   
        transform: translateY(-0.5em);
        
    }

    @media(max-width:950px){
        font-size: .5em;
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
    align-item: center;

    @media(max-width: 950px){
        width: 150px;
        height: 150px;
    }
`

export const SmallText = styled.p`
    color: #b942ff;
    font-size: 0.5rem;   
    font-weight: 400;
    text-align: center;
    margin-bottom: 0;

    @media(max-width: 950px){
        font-size: 0.3rem;
    }
`

export const Wrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media(max-width:950px){
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: flex-start;

        &:first-child{
            align-items: center;
            flex-direction: column; 
        }
    }


`



