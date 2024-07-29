import { CircleCheck } from "lucide-react";
import { ReactNode } from "react";

interface atividadesProps{
    childdren:ReactNode
    
}
  export function CardComponentePrincipal({childdren}:atividadesProps){
    return(
    
                            <div className=" bg-zinc-900  rounded-lg px-4 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <CircleCheck className="text-lime-300 size-5"/>
                                    <p className="text-zinc-100 text-sm">{childdren}</p>
                                </div>
                                <p className="text-zinc-400">{childdren}</p>
                            </div> 
        
    )
  }