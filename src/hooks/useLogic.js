import { useReducer } from "react"

export function useLogic(){
    const [state, dispatch] = useReducer((state, action)=>{
        switch(action.type){
            case "ROUNDINC":
                return { ...state, round: state.round+1 }
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
    })

    return [state, dispatch]
}