import React from "react"
const Button = (props)=>{
    console.log(props);
    const {children, clickAction} = props;
    const handleClick = ()=>{
        //clickAction();
        //What if clickAction function donot exits We use optional chaining..
        clickAction?.();
    }
    return <button onClick={handleClick}> {children} </button>
}

export default Button