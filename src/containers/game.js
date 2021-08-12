import React, { useEffect, useState } from "react"
import { Game } from "../components/Game"

export function GameContainer(){
    const [ round, setRound] = useState(1)
    const [ playerWin, setPlayerWin] = useState(0)
    const [ botWin, setBotWin] = useState(0)
    const buttons = ["Rock", "Paper", "Scissors"]

    function randomButtonIndex(){
        return Math.floor(Math.random(0 * 3))
    }

    function computeWinner(value){
        const botPick = randomButtonIndex()
        console.log(botPick)
        if ( value === botPick) return "Tie"
        switch(value){
            case "0":{
                return botPick === 1 ? "Bot" : "Player"
            }
            case "1":{
                return botPick === 2 ? "Bot" : "Player"
            }
            case "2":{
                return botPick === 0 ? "Bot" : "Player"
            }
            default: return null
        }
    }

    function handleChange(event){
        const { value } = event.target
        console.log(computeWinner(value))
        setRound(round+1)
    }


    return(
        <>
            <Game>
                <Game.Title> Round {round}</Game.Title>
                <Game.Subtitle>Winner is Player!</Game.Subtitle>
                <Game.Text>Player {playerWin}</Game.Text>
                <Game.Text>Bot Ropasci {botWin}</Game.Text>
                <Game.ButtonWrapper>
                    {buttons.map((button, index)=>(
                        <Game.Button key={`button ${index}`}onClick={handleChange} value={index}>{button}</Game.Button>
                    ))}
                </Game.ButtonWrapper>
            </Game>
        
        
        </>
    )
}