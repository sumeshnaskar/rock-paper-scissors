import React from "react"
import { Game } from "../components/Game"
import { useLogic } from "../hooks/useLogic"
import { buttons, playerText, botText } from "../constants/array"

export function GameContainer(){
    const [ {round, playerWin, botWin, displayWinner}, dispatch ] = useLogic()
    const randomIndex = () =>  Math.floor(Math.random() * 3)
    

    const computeWinner = (value) => {
        const botPick = randomIndex()
        const playerPick = parseInt(value)
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
        dispatch({type:"ROUNDINC"})
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
                <Game.Title> Round {round}</Game.Title>
                <Game.Subtitle>{displayWinner}</Game.Subtitle>
                <Game.Text>Player {playerWin}</Game.Text>
                <Game.Text>Bot Ropasci {botWin}</Game.Text>
                <Game.ButtonWrapper>
                    {buttons.map((button, index)=>(
                        <Game.Button 
                            key={`button ${index}`}
                            onClick={handleChange} 
                            value={index}
                        >
                            {button}
                        </Game.Button>
                    ))}
                </Game.ButtonWrapper>
            </Game>
        
        
        </>
    )
}