import { useReducer } from "react"
import  rock  from "../images/luis-quintero-1M-7-W6wHb8-unsplash.jpg"

export function useLogic(){
    const [state, dispatch] = useReducer((state, action)=>{
        switch(action.type){
            case "ROUNDINC":
                return { ...state, 
                    round: state.round+1, 
                    botImage: action.setBotImage, 
                    playerImage: action.setPlayerImage}
            case "BOTWIN":
                return { ...state, botWin: state.botWin + 1, displayWinner: action.text }
            case "PLAYERWIN":
                return { ...state, playerWin: state.playerWin + 1, displayWinner: action.text}
            default: return { ...state, displayWinner: action.text}
        }
    },{
        round: 1,
        playerWin: 0,
        botWin: 0,
        displayWinner: '',
        playerImage: `${rock}`,
        botImage: `${rock}`
    })

    return [state, dispatch]
}