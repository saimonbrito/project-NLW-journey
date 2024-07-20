import { ArrowRight, UserRoundPlus } from "lucide-react"

interface boxProps{
    funBoxModal:(e:any)=>void
    adcionarEmailmodal: string[]
    funBoxConfirmarViagem: (e:any) => void
}


export function Box({
funBoxModal,
adcionarEmailmodal,
funBoxConfirmarViagem
}:boxProps){
    return(
        <div className=" max-w-3xl w-full bg-zinc-900 text-zinc-400 p-4 flex gap-4 rounded-lg"> 

        <button type="button" onClick={funBoxModal} className=" flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400"/> 
        {adcionarEmailmodal.length > 0 ? (
            <span>{adcionarEmailmodal.length} pessoa(s) convidada(s)</span>
        ):(
            <span className="text-zinc-400">Quem estará na viagem?</span>
        )}
    
        
        </button>
        
        <button  onClick={funBoxConfirmarViagem} className="bg-lime-300 text-lime-950 px-5 hover:bg-lime-400 py-2 rounded-md flex  items-center gap-1 font-medium">
            Confirmar viagem
            <ArrowRight/> 
         </button>
       
        
    </div>
    )
}