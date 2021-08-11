import React from "react"

import { Loading } from "./components/Loading"
import { GlobalStyles } from "./global-styles"

function App(){
  return (
    <>
      <GlobalStyles/>
      <Loading>
         <Loading.Text data-text="Fine tuning..."> Fine tuning...</Loading.Text>
      </Loading>
    </>
  )
}
export default App