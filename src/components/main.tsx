

import { FormEvent, useState } from "react";
import { useNavigate }from "react-router-dom"
import { BoxModal } from "./boxModal";
import { BoxConfirmaraViagem } from "./boxConfirmarViagem";
import { Box } from "./box";
import { SelecionarViagem } from "../components/inputSelecionar";
import { InputConfirmar } from "./selecionarViagem";
import { ArrowRight, Settings2 } from "lucide-react";
import { DateRange } from "react-day-picker";
import { api } from "../lib/axios";



export function Main(){
    const [ box,setBox] = useState(false)
    const [ boxModal,setBoxModal] = useState(false)
    const [ boxConfirmaraViagem,setBoxConfirmarViagem] = useState(false)
    const navigate = useNavigate();

    const [destination,setDestination] = useState('')
    const [ownerName,setOwnerName] = useState('')
    const [ownerEmail,setOwnerEmail] = useState('')
    const [eventStartAndeDate,setEventStartAndeDate] = useState<DateRange | undefined>()

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

    function funBoxConfirmarViagem(e:any){
        e.preventDefault()
        setBoxConfirmarViagem(true)
    }
    function closeFunBoxConfirmarViagem(e:any){
        e.preventDefault()
        setBoxConfirmarViagem(false)
    }

    async function confirmarCriacaoViagem(){

        console.log(destination)
        console.log(ownerName)
        console.log(ownerEmail)
        console.log(eventStartAndeDate)
        console.log(adcionarEmailmodal)

        if(!destination){
            return
        }

        if(!eventStartAndeDate?.from || !eventStartAndeDate?.to){
            return
        }
        if(adcionarEmailmodal.length === 0){
            return
        }

        if(!ownerName || !ownerEmail){
            return
        }


         const response = await api.post('/trips',
            {
                destination,
                starts_at: eventStartAndeDate.from,
                ends_at: eventStartAndeDate.to,
                emails_to_invite: adcionarEmailmodal,
                owner_name: ownerName,
                owner_email: ownerEmail
              }
        )

        const {tripId} = response.data

        navigate(`/trips/${tripId}`)
    }
    


    return(

        <div className="h-screen  flex flex-col gap-10 justify-center items-center bg-pattesr bg-no-repeat bg-center">

                     {/* header */}
                    <div className=" flex flex-col items-center gap-3 " >
                        
                        <img src="/logo.svg" alt="" />
                
                        <p className="text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>

                    </div>

                   {/* main */}

                <div className="flex flex-col gap-3">
                
                        <div className=" max-w-3xl w-full bg-zinc-900 text-zinc-400 p-4 flex gap-4 rounded-lg">
                        
                             <SelecionarViagem
                             setDestination={setDestination}
                             />
                           <InputConfirmar
                             setEventStartAndeDate={setEventStartAndeDate}
                             eventStartAndeDate={eventStartAndeDate}
                          
                           />
                           {box ?(
                                <button onClick={funBoxreturn} className="bg-zinc-800 text-zinc-200 px-5 hover:bg-zinc-700 py-2 rounded-md flex  items-center gap-1 font-medium">
                                    Alterar local e data 
                                    <Settings2 className="size-5"/></button>
                            ):(
                                <button  onClick={funBox} className="bg-lime-300 text-lime-950 px-5 hover:bg-lime-400 py-2 rounded-md flex  items-center gap-1 font-medium"> 
                                Continuar 
                                <ArrowRight/> </button>
                            )}
                            
                            
                        </div>
                        {box && (
                           <Box 
                           adcionarEmailmodal={adcionarEmailmodal}
                           funBoxModal={funBoxModal}
                           funBoxConfirmarViagem={funBoxConfirmarViagem}
                           />
                        )}
                    

                    {boxModal && (  
                       <BoxModal
                       adcionarEmailmodal={adcionarEmailmodal}
                       emailSubmit={emailSubmit}
                       removeEmailSubmit={removeEmailSubmit}
                       fexarFunBoxModal={fexarFunBoxModal}

                       
                       />
                    )}
                   {boxConfirmaraViagem && (
                     <BoxConfirmaraViagem 
                       closeFunBoxConfirmarViagem={closeFunBoxConfirmarViagem}
                       confirmarCriacaoViagem={confirmarCriacaoViagem}
                       emailSubmit={emailSubmit}
                       setOwnerName={setOwnerName}
                       setOwnerEmail={setOwnerEmail}
                     />
                   )} 
                    

                </div>  
                {/* footer */}
                <div>
                    <p className="text-zinc-500 text-center">Ao planejar sua viagem pela plann.er você automaticamente concorda<br/>
                    com nossos <strong className="text-zinc-300"> termos de uso</strong > e <strong className="text-zinc-300">políticas de privacidade</strong>.</p>
                </div>
             </div>     
         )
}