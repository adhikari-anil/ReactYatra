import React from "react"
import Button from "./Button"

const App = ()=>{
    const handleClickAction = ()=>{
        console.log(" I was clicked from parent...");
    }
    return <Button clickAction={handleClickAction}>Hello there</Button> 
}

export default App