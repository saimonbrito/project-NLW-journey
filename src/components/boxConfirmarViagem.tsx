import { Mail, User, X } from "lucide-react"

interface boxConfirmaraViagemProps{
    closeFunBoxConfirmarViagem:(e:any)=> void
    emailSubmit:(e:any)=> void
    confirmarCriacaoViagem:()=> void
}


export function BoxConfirmaraViagem({
    closeFunBoxConfirmarViagem,
    emailSubmit,
    confirmarCriacaoViagem
}:boxConfirmaraViagemProps){
    return(
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
                     <div className="w-[640px] px-6 py-5 rounded-xl bg-zinc-900">

                         <div className="flex justify-between">
                             <h1 className="text-white">Confirmar criação da viagem</h1>
                             <X className="text-zinc-400 w-5 " onClick={closeFunBoxConfirmarViagem}/>
                         </div>
                             <p className="text-zinc-400">Para concluir a criação da viagem para <span className="text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="text-zinc-100">16 a 27 de Agosto de 2024 </span>preencha seus dados abaixo:</p> 

                         <div className="py-5 px-6 flex flex-wrap gap-2" > 

                        
                         </div>
                             <form onSubmit={emailSubmit} className=" space-y-3">
                                 <div className="flex  justify-between items-center px-6 py-5  bg-zinc-950 rounded-md">
                                     <User className="size-5 text-zinc-400"/>
                                     <input 
                                     type='email'
                                     name="email"
                                     placeholder=" Seu nome completo" 
                                     className=" outline-none bg-transparent w-full size-5 px-4 py-2 bg-zinc-950 placeholder:text-zinc-400 text-zinc-400 flex-1" />
                                 </div>

                                 <div className="flex  justify-between items-center px-6 py-5  bg-zinc-950 rounded-md">
                                     <Mail className="size-5 text-zinc-400"/>
                                     <input 
                                     type='email'
                                     name="email"
                                     placeholder="  Seu e-mail pessoal" 
                                     className=" outline-none bg-transparent w-full size-5 px-4 py-2 bg-zinc-950 placeholder:text-zinc-400 text-zinc-400 flex-1" />
                                 </div>

                                 
                                 <button onClick={confirmarCriacaoViagem} className=" w-full text-center bg-lime-300 text-lime-950 px-5 py-2 hover:bg-lime-400 rounded-lg flex justify-center items-center gap-1 font-medium">
                                 Confirmar criação da viagem
                                     
                                 </button>
                                 
                             </form>                            
                          </div>      
                      </div>
    )
}