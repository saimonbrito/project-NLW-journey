import { ArrowRight , Calendar,MapPin,UserRoundPlus, AtSign,Plus,X,Settings2} from "lucide-react";
import { FormEvent, useState } from "react";




export function Main(){
    const [ box,setBox] = useState(false)
    const [ boxModal,setBoxModal] = useState(false)
    const [adcionarEmailmodal, setAdcionarEmailmodal] = useState([
         'brito@brito.com' 
         ,'saikas@amores.com',
         'saikas@amores.com'

    ])

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
    function fexarFunBoxModal(e:any){
        e.preventDefault()
        setBoxModal(false)
    }
    
    function emailSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const data =new FormData(e.currentTarget)
        const email = data.get('email')?.toString()


       if(!email){
        return
       }
       if (adcionarEmailmodal.includes(email)){
        return
       }

        setAdcionarEmailmodal([
            ...adcionarEmailmodal,
            email
        ])

        e.currentTarget.reset()


    }

    function removeEmailSubmit(emailRemove:string){
        const newEmailList = adcionarEmailmodal.filter(email => email !== emailRemove)
      setAdcionarEmailmodal(newEmailList)
    }



    return(
        <div>
            <form className="flex flex-col gap-3">
                <div className=" max-w-3xl w-full bg-zinc-900 text-zinc-400 p-4 flex gap-4 rounded-lg">
                  <div className="  flex items-center gap-2 flex-1">
                  <MapPin className="size-5 text-zinc-400"/> 
                  <input disabled={box} className="outline-none bg-transparent w-80 text-zinc-400"  placeholder="Para onde você vai?" type="Para onde você vai?"  />
                  </div>
                     <div className=" flex items-center gap-2">
                     <Calendar className="size-5 text-zinc-400"/>
                     <input disabled={box} className=" outline-none bg-transparent w-20 "  placeholder=" Quando?" type="Quando?" />
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
                                    className=" outline-none bg-transparent w-full size-5 px-4 py-2 bg-zinc-950 placeholder:text-zinc-400 text-zinc-400 flex-1" type="Digite o e-mail do convidado" />
                                </div>

                                <div>
                                <button type="submit" className="bg-lime-300 text-lime-950 px-5 py-2 hover:bg-lime-400 rounded-lg flex  items-center gap-1 font-medium">
                                    convidado 
                                    <Plus className="size-5 text-zinc-950"/>
                                </button>
                                </div>

                            </form>
                       
                        
                    </div>
                    
                </div>

            )}

        </div>
    )
}