import {  CheckCircle2, CircleDashed, Link2, Plus, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/axios";


interface ParticipantesProps {
    id: string
    name: string | null
    email:string
    is_confirmed:boolean
}



export function Convidados(){
    
    const{ tripId } = useParams()
     const [participante ,setParticipante] = useState<ParticipantesProps[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipante(response.data.participants))
    },[tripId])

    


    return(

        <div className=" w-80 flex flex-col gap-5">
                <h2 className="text-zinc-50">Links importantes</h2>

                <div className="flex justify-center gap-20 items-center">
                    <div className="flex  flex-col gap-1">
                        <span className="text-zinc-100">Reserva do AirBnB</span>
                        <a className="text-zinc-400 text-xs truncate hover:text-zinc-200" href="*">https://www.airbnb.com.br/rooms/104700011</a>
                    </div>
                    <Link2 className="text-zinc-400"/>                        
                </div>

                <div className="flex justify-center gap-20 items-center">
                    <div className="flex  flex-col gap-1">
                        <span className="text-zinc-100">Regras da casa</span>
                        <a className="text-zinc-400 text-xs truncate  hover:text-zinc-200" href="#">https://www.airbnb.com.br/rooms/104700011</a>
                    </div>
                    <Link2 className="text-zinc-400"/>                        
                </div>

                <div className="flex  bg-zinc-800 px-4 py-2 justify-center items-center gap-2 rounded-lg">
                    <Plus className="  text-zinc-400"/>
                    <button className="text-zinc-200 ">Cadastrar novo link</button>
                </div>

                    <h2 className="text-zinc-50 ">Convidados</h2>

                {participante.map((participants, index) => {
                    return(
                        <div key={participants.id} className="flex justify-between gap-20 items-center">

                            <div className="flex  flex-col gap-1">
                                <span className="text-zinc-100">{participants.name ?? `Convidados ${index}`}</span>
                                <a className="text-zinc-400 text-xs" href="*">{participants.email}</a>
                            </div>
                            {participants.is_confirmed ?
                               (

                               <CheckCircle2 className="size-5 shrink-0 text-green-400"/>

                               ):(

                                <CircleDashed className="text-zinc-400"/>  

                               )
                        
                              }                
                                
                        </div>
                    )
                })}

               

                <div className="flex  bg-zinc-800 px-4 py-2 justify-center items-center gap-2 rounded-lg">
                    <UserCog className="  text-zinc-400"/>
                    <button className="text-zinc-200 ">Gerenciar convidados</button>
                </div>
        
        </div>
    )
}