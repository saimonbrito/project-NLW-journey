

import {  Calendar,  } from "lucide-react"
import { useState } from "react"
import { X } from "lucide-react"
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";

interface InputConfirmarProps{
    eventStartAndeDate:DateRange | undefined
    setEventStartAndeDate:(dates: DateRange | undefined)=> void
}

export function InputConfirmar({setEventStartAndeDate,eventStartAndeDate}:InputConfirmarProps){

    const[dayPicker,setDayPicker]= useState(false)
    
   

   const displayDate = eventStartAndeDate && eventStartAndeDate.from && eventStartAndeDate.to
    ? format(eventStartAndeDate.from, "d 'de ' LLL").concat(' ate ').concat(format(eventStartAndeDate.to,"d 'de ' LLL")) 
    : null

    function openFunDayPicker(){
        setDayPicker(true)
    }
    function closeFunDayPicker(){
        setDayPicker(false)
    }

    return(
        <>
            <button  onClick={openFunDayPicker}  className=" cursor-pointer flex items-center gap-2 w-60">
                
              <Calendar className="size-5 text-zinc-400"/>
                <span className=" text-zinc-400  text-lg w-44 text-left flex-1 " >
                   {displayDate ||'Quando' } 
                </span>
                
            </button>

            {dayPicker && (
                 <div className="fixed  inset-0 bg-black/60 flex justify-center items-center">
                 <div className=" w-96 px-6 py-5 rounded-xl bg-zinc-900">
         
                     <div className="flex justify-between">
                         <h1 className="text-white">Selecionar a data</h1>
                         <X className="text-zinc-400 w-5 " onClick={closeFunDayPicker}/>
                     </div>
                         
                        
                     <DayPicker
                         mode="range"
                         selected={eventStartAndeDate}
                         onSelect={setEventStartAndeDate}
                         />
                                       
                 </div>      
            </div> 
            )}
        
            
        </>
    )
}