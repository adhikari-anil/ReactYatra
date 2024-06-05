import React, { useState } from "react"
import Text from "./Text"
import Button from "./Button"

const App = ()=>{
    const [data, setData] = useState([
        {id: "a", text: "text 1"},
        {id: "b", text: "text 2"},
        {id: "c", text: "text 3"},
        {id: "d", text: "text 4"},
        {id: "e", text: "text 5"}        
    ]) 
    const addMoreData = ()=>{
        setData((preData) => [...preData, {id: "f", text: "text 6"}])
    }
    return <>
    {data.map((item, index)=> <Text key={item.id}>{item.text}</Text>)}
    <Button clickAction={addMoreData}>Add more data</Button>
    </> 
}

export default App