import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"

interface boxModalProps{
    fexarFunBoxModal: (e:any) => void
    adcionarEmailmodal: string[]
    removeEmailSubmit:(email:string)=> void
    emailSubmit:(e:FormEvent<HTMLFormElement>)=>void
}


export function BoxModal({
    fexarFunBoxModal,
    adcionarEmailmodal,
    removeEmailSubmit,
    emailSubmit
}:boxModalProps){

    return(
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
        <div className="w-[640px] px-6 py-5 rounded-xl bg-zinc-900">

            <div className="flex justify-between">
                <h1 className="text-white">Selecionar convidados</h1>
                <X className="text-zinc-400 w-5 " onClick={fexarFunBoxModal}/>
            </div>
                <p className="text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p> 

            <div className="py-5 px-6 flex flex-wrap gap-2" > 

            {adcionarEmailmodal.map(email => {
                return( 

                    <div key={email} className=" rounded-md bg-zinc-800  flex items-center ">
                <span className="px-2 py-1 text-zinc-300">{email}</span>
                <button type="button" onClick={()=> removeEmailSubmit(email)}>
                <X className=" text-zinc-400 w-4" />
                </button>
                </div>
                )
            })}
            </div>

            

                <form onSubmit={emailSubmit} className="flex  justify-between items-center px-6 py-5  bg-zinc-950 rounded-md">
                    <div className="flex gap-3 rounded-lg">
                        <AtSign className="size-5 text-zinc-400"/>
                        <input 
                        type='email'
                        name="email"
                        placeholder="  Digite o e-mail do convidado" 
                        className=" outline-none bg-transparent w-full size-5 px-4 py-2 bg-zinc-950 placeholder:text-zinc-400 text-zinc-400 flex-1" />
                    </div>

                    <div>
                    <button  type="submit" className="bg-lime-300 text-lime-950 px-5 py-2 hover:bg-lime-400 rounded-lg flex  items-center gap-1 font-medium">
                        convidado 
                        <Plus className="size-5 text-zinc-950"/>
                    </button>
                    </div>
                </form>                            
        </div>      
   </div>
    )
}