import { MapPin } from "lucide-react";

interface setDestino{
    setDestination: (destination:string)=>void
}


export function SelecionarViagem({setDestination}:setDestino){
    return(
        <div className="  flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400"/> 
        <input
            
            className="outline-none bg-transparent w-80 text-zinc-400" 
            placeholder="Para onde você vai?" 
            type="Para onde você vai?" 
            onChange={event => setDestination(event.target.value)}
             />
        </div>
    )
}