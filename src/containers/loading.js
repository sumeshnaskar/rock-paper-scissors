import React, { useState, useEffect } from "react"
import { GameContainer } from "./game"

import { Loading } from "../components/Loading"

export function LoadingContainer(){
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 4500)
    })
    
    return (
        <>
            {loading ? 
            <Loading>
                <Loading.Text data-text="Fine tuning..."> 
                Fine tuning...
                </Loading.Text>
            </Loading> :
            <GameContainer/>}
        </>
 
    )
}