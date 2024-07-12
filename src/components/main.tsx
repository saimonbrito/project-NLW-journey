import { ArrowRight , Calendar,MapPin} from "lucide-react";
import { useState } from "react";


export function Main(){
    const [ box,setBox] = useState(false)

    function funBox(){
        setBox(true)
    }
    return(
        <div>
            <form className="flex flex-col gap-3">
                <div className=" max-w-3xl w-full bg-zinc-900 text-zinc-400 p-4 flex gap-4 rounded-lg">
                  <div className=" flex items-center gap-2 flex-1">
                  <MapPin className="size-5 text-zinc-400"/> 
                  <input className="bg-transparent w-80 text-zinc-400"  placeholder="Para onde você vai?" type="Para onde você vai?"  />
                  </div>
                     <div className=" flex items-center gap-2">
                     <Calendar className="size-5 text-zinc-400"/>
                     <input  className="bg-transparent w-20 "  placeholder=" Quando?" type="Quando?" />
                     </div>
                    <div className="">
                    <button  onClick={funBox} className="bg-lime-300 text-lime-950 px-5 hover:bg-lime-400 py-2 rounded-md flex  items-center gap-1 font-medium">Continuar <ArrowRight/> </button>
                    </div>
                    
                </div>
                {box && (
                    <div className=" max-w-3xl w-full bg-zinc-900 text-zinc-400 p-4 flex gap-4 rounded-lg">
                    <div className=" flex items-center gap-2 flex-1">
                    <MapPin className="size-5 text-zinc-400"/> 
                    <input className="bg-transparent w-80 text-zinc-400"  placeholder="Para onde você vai?" type="Para onde você vai?"  />
                    </div>
                       <div className=" flex items-center gap-2">
                       <Calendar className="size-5 text-zinc-400"/>
                       <input  className="bg-transparent w-20 "  placeholder=" Quando?" type="Quando?" />
                       </div>
                      <div className="">
                      <button  onClick={funBox} className="bg-lime-300 text-lime-950 px-5 hover:bg-lime-400 py-2 rounded-md flex  items-center gap-1 font-medium">Continuar <ArrowRight/> </button>
                      </div>
                      
                  </div>
                )}
            </form>

        </div>
    )
}