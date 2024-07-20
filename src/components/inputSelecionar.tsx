import { MapPin } from "lucide-react";

interface inputSelecionar{
    box:boolean
}

export function InputSelecionar({box}:inputSelecionar){
    return(
        <div className="  flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400"/> 
        <input disabled={box} 
        className="outline-none bg-transparent w-80 text-zinc-400" 
        placeholder="Para onde você vai?" 
        type="Para onde você vai?"  />
        </div>
    )
}