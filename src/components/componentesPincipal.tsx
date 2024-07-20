
import { Calendar, MapPin,Settings2 } from "lucide-react";

 
 
 
 export function ComponentesPrincipal(){
    return(
      
      <div className=" max-w-6xl mx-auto space-y-8 px-6 py-10 ">
        <div className="flex px-5 bg-zinc-900  justify-between h-16 items-center rounded-lg">
             <div className="flex gap-2 text-zinc-400 items-center ">
             <MapPin className="text-zinc-400"/>
             <span >Florianópolis, Brasil</span>
             </div>
              <div className="flex items-center">
              <Calendar className="text-zinc-400 size-5"/>
              <span className="text-zinc-400 px-2">17 a 23 de Agosto</span>
              <div className="w-px h-6 bg-zinc-800 m-4"/> 
              <div className="bg-zinc-800 flex px-5 py-1 items-center gap-1 rounded-lg">
              <button className=" text-zinc-200 ">Alerta local/data</button>
              <Settings2 className=" text-zinc-400 size-5"/>
              </div>
             </div>                   
        </div>


      </div>

    )
 }