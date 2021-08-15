import React from "react"

import { Game } from "../components/Game"
import { useLogic } from "../hooks/useLogic"
import { buttons, playerText, botText } from "../constants/array"

import rock from "../images/luis-quintero-1M-7-W6wHb8-unsplash.jpg"
import paper from "../images/mika-korhonen-Xodzxosar18-unsplash.jpg"
import scissors from "../images/nathan-fertig-y0HerwKQLMk-unsplash.jpg"

export function GameContainer(){
    const [{
        round, 
        playerWin, 
        botWin, 
        noWin, 
        displayWinner, 
        playerImage, 
        botImage
    }, dispatch ] = useLogic()
    const randomIndex = () =>  Math.floor(Math.random() * 3)
    const display = [rock, paper, scissors]
    const style = { color: "#17bf8f"} 

    const computeWinner = (value) => {
        const botPick = randomIndex()
        const playerPick = parseInt(value)
        dispatch({type:"ROUNDINC", setBotImage: display[botPick], setPlayerImage: display[playerPick]})
        if ( playerPick === botPick ) return "Tie"
        switch(value){
            case "0": return botPick === 1 ? "Bot" : "Player"
            case "1": return botPick === 2 ? "Bot" : "Player"
            case "2": return botPick === 0 ? "Bot" : "Player"
            default: return null
        }
    }

    function handleChange(event){
        const { value } = event.target
        const winner = computeWinner(value)
        const index = randomIndex()
        switch(winner){
            case "Bot": dispatch({type:"BOTWIN", text: `Bot says "${botText[index]}"`})
                break
            case "Player": dispatch({type:"PLAYERWIN", text: `Player says "${playerText[index]}"`})
                break
            default: dispatch({type:"TIE", text: "TIED! Let's play another round."})
        }
    }

    return(
        <>
            <Game>
                <Game.Title> 
                    Round <span style={ style }>{round}</span>
                </Game.Title>

                <Game.Subtitle>
                    <span 
                    style={{color: "#dea431", 
                    border: "2px solid white", 
                    padding: "0.5em",
                    borderRadius: "50px", 
                    marginRight: "0.5em",
                    textAlign:"center"}}>
                        Winning note 
                    </span>
                    {displayWinner}
                </Game.Subtitle>

                <Game.InnerContainer>
                    <Game.Wrapper>
                        <Game.Image isPlayer={true} src={playerImage}/>
                        <Game.ButtonWrapper>
                        {buttons.map((button, index)=>(
                            <Game.Button                           
                                key={`button ${index}`}
                                src={display[index]}
                                onClick={handleChange} 
                                value={index}
                            >
                                {button}
                            </Game.Button>                       
                        ))}
                        </Game.ButtonWrapper>
                    </Game.Wrapper>
                   
                    <Game.Wrapper> 
                        <Game.Text>Player - <span style={ style }>{playerWin}</span></Game.Text>
                        <Game.Text>Bot - <span style={ style }>{botWin}</span></Game.Text>
                        <Game.Text>Tied - <span style={ style }>{noWin}</span></Game.Text>
                    </Game.Wrapper>

                    <Game.Wrapper> 
                        <Game.Image isPlayer={false} src={botImage}/>   
                    </Game.Wrapper>          
                </Game.InnerContainer>
                

                <Game.SmallText>Photos by Unsplash: @luis quintero(Rock👊) 
                @mika korehonen(Paper✋) and
                @Nathan Fertig(Scissors✌️) 
                </Game.SmallText>
            </Game>


        </>
    )
}