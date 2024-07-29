import { Calendar, Tag, X } from "lucide-react"
import { Button } from "../globalComponents/button"

interface boxConfirmaraViagemProps{
    closeFunBoxConfirmarViagem:(e:any)=> void
    
}


export function CadastrarAtividades({
    closeFunBoxConfirmarViagem,
   
}:boxConfirmaraViagemProps){
    return(
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
                     <div className="w-[640px] px-6 py-5 rounded-xl bg-zinc-900">

                         <div className="flex justify-between">
                             <h1 className="text-white">Cadastrar atividade</h1>
                             <X className="text-zinc-400 w-5 " onClick={closeFunBoxConfirmarViagem}/>
                         </div>
                             <p className="text-zinc-400">Todos convidados podem visualizar as atividades. </p> 

                         <div className="py-5 px-6 flex flex-wrap gap-2" > 

                        
                         </div>
                             <form  className=" space-y-3">
                                 <div className="flex  justify-between items-center px-6 py-5  bg-zinc-950 rounded-md">
                                     <Tag className="size-5 text-zinc-400"/>
                                     <input 
                                     type='email'
                                     name="email"
                                     placeholder=" Qual a atividade" 
                                     className=" outline-none bg-transparent w-full size-5 px-4 py-2 bg-zinc-950 placeholder:text-zinc-400 text-zinc-400 flex-1" />
                                 </div>

                                 <div className="flex  justify-between items-center px-6 py-5  bg-zinc-950 rounded-md">
                                     <Calendar className="size-5 text-zinc-400"/>
                                     <input 
                                     type='datetime-local'
                                     name="occurs_at"
                                     placeholder=" Datae horário da atividade" 
                                     className=" outline-none bg-transparent w-full size-5 px-4 py-2 bg-zinc-950 placeholder:text-zinc-400  text-zinc-400 flex-1" />
                                 </div>

                                 
                                 <Button> 
                                     Salvar atividade
                                 </Button>
                                 
                             </form>                            
                          </div>      
                      </div>
    )
}