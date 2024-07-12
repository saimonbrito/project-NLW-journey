import { ArrowRight , Calendar,MapPin,UserRoundPlus, Settings2,AtSign,Plus} from "lucide-react";
import { useState } from "react";



export function Main(){
    const [ box,setBox] = useState(false)
    const [ boxModal,setBoxModal] = useState(false)

    function funBox(e:any){
        e.preventDefault()
        setBox(true)
    }
    
    function funBoxreturn(e:any){
        e.preventDefault()
        setBox(false)
    }
    function funBoxModal(e:any){
        e.preventDefault()
        setBoxModal(true)
    }




    return(
        <div>
            <form className="flex flex-col gap-3">
                <div className=" max-w-3xl w-full bg-zinc-900 text-zinc-400 p-4 flex gap-4 rounded-lg">
                  <div className=" flex items-center gap-2 flex-1">
                  <MapPin className="size-5 text-zinc-400"/> 
                  <input disabled={box} className="bg-transparent w-80 text-zinc-400"  placeholder="Para onde você vai?" type="Para onde você vai?"  />
                  </div>
                     <div className=" flex items-center gap-2">
                     <Calendar className="size-5 text-zinc-400"/>
                     <input disabled={box} className="bg-transparent w-20 "  placeholder=" Quando?" type="Quando?" />
                     </div>
                    <div className="">
                   {box ?(
                       <button onClick={funBoxreturn} className="bg-zinc-800 text-zinc-200 px-5 hover:bg-zinc-700 py-2 rounded-md flex  items-center gap-1 font-medium">Alterar local e data <Settings2 className="size-5"/></button>
                   ):(
                    <button  onClick={funBox} className="bg-lime-300 text-lime-950 px-5 hover:bg-lime-400 py-2 rounded-md flex  items-center gap-1 font-medium">Continuar <ArrowRight/> </button>
                   )}
                    </div>
                    
                </div>
                {box && (
                    <div className=" max-w-3xl w-full bg-zinc-900 text-zinc-400 p-4 flex gap-4 rounded-lg"> 

                    <button type="button" onClick={funBoxModal} className=" flex items-center gap-2 flex-1">
                    <UserRoundPlus className="size-5 text-zinc-400"/> 
                    <span className="text-zinc-400">Quem estará na viagem?</span>
                       
                    </button>
                       
                      <div className="">
                      <button   className="bg-lime-300 text-lime-950 px-5 hover:bg-lime-400 py-2 rounded-md flex  items-center gap-1 font-medium">Confirmar viagem<ArrowRight/> </button>
                      </div>
                      
                  </div>
                )}
            </form>

            {boxModal &&
            (  
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
                   <div className="w-[640px] px-6 py-5 rounded-xl bg-zinc-900">
                     <div>
                     <h1>selecionar convidados</h1>
                     <p>Os convidados irão receber e-mails para confirmar a participação na viagem.</p> 
                     </div>
                     

                     <div className="flex  justify-between items-center px-6 py-5  bg-zinc-950 rounded-md">
                        <AtSign className="size-5 text-zinc-400"/>
                        <p className="text-zinc-400">Digite o e-mail do convidado</p>
                        <div>
                            <button  className="bg-lime-300 text-lime-950 px-3 hover:bg-lime-400 rounded-md flex  items-center gap-1 font-medium">convidado <Plus className="size-5 text-zinc-400"/></button>
                        </div>
                     </div>
                    </div>
                </div>

            )}

        </div>
    )
}