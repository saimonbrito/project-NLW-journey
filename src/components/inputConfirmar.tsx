import {  Calendar,  } from "lucide-react"

interface inputConfirmarProps{
    box:boolean
    
}
export function InputConfirmar({
    box,
   
}:inputConfirmarProps){
    return(
        <>
            <div className=" flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400"/>
        <input 
            disabled={box} 
            className="  outline-none bg-transparent w-44 " 
            placeholder=" Quando?" 
            type="Quando?" />
        </div>
        
            
        </>
    )
}