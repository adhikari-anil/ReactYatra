import React,{memo} from 'react'
const Text = memo(
 (props)=>{
    const {children} = props
    return <div>{children}</div>
})

export default Text