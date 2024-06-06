import { useState } from "react"
export default function Buttons(){
    const [first, setfirst] = useState('')
    const btnz = [
        "1","2","3","4","5","6","7","8","9","0","+","-","C","/","%","*","=" ]
        const handleClick = (e) =>{
            if(e === "C" ){
                setfirst("")
            }else if(e === "="){
                const res = eval(first)
                setfirst(res)
            }else{
                const result = first + e
                setfirst(result)
            }
        }
        
    return(
        <div>
            <p><input type="text" value={first}  /></p>
            {
                btnz.map((item, ind) =>(
                    <button key={ind} onClick={() =>handleClick(item)}> {item} </button>
                ))
            }
        </div>
    )
}