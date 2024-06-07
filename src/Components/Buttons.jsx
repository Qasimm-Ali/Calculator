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
        <div className="  w-[350px] flex flex-col items-center justify-start  ">
            <p className="text-center"><input className="w-[300px] text-right p-5  h-[38px] border-[2px] border-black rounded-md text-xl " type="text" value={first} readOnly  /></p>
            <div className="m-3  ">
            {btnz.map((item, ind) =>(
                <button className=" text-stone-800 text-xl m-4 h-[45px] w-[45px] border-[2px] border-black rounded-md active:bg-orange-700 active:text-white " key={ind} onClick={() =>handleClick(item)}> {item} </button>   
                ))
                }
            </div>
        </div>
    )
}