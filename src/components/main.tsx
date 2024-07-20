
import { FormEvent, useState } from "react";
import { useNavigate }from "react-router-dom"
import { BoxModal } from "./boxModal";
import { BoxConfirmaraViagem } from "./boxConfirmarViagem";
import { Box } from "./box";
import { InputSelecionar } from "./inputSelecionar";
import { InputConfirmar } from "./inputConfirmar";
import { ArrowRight, Settings2 } from "lucide-react";



export function Main(){
    const [ box,setBox] = useState(false)
    const [ boxModal,setBoxModal] = useState(false)
    const [ boxConfirmaraViagem,setBoxConfirmarViagem] = useState(false)
    const navigate = useNavigate();
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

    function confirmarCriacaoViagem(){
        navigate('/ComponentesPrincipal')
    }


    return(
                <div className="flex flex-col gap-3">
                
                        <div className=" max-w-3xl w-full bg-zinc-900 text-zinc-400 p-4 flex gap-4 rounded-lg">
                        
                             <InputSelecionar
                             box
                             />
                           <InputConfirmar
                           box
                          
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
                     />
                   )} 
                    

                </div>
         )
}