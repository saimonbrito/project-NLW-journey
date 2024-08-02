import { Calendar, MapPin, Settings2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/axios";
import { format } from "date-fns";

 interface Trip{
    id: string
    destination:string
    starts_at: string
    ends_at: string
    in_confirmed:boolean
 }
    

 export function ComponentePrincipalHeader(){

  const{ tripId } = useParams()
  const [trip ,setTrip] = useState<Trip | undefined>()

  useEffect(() => {
      api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
  },[tripId])

  const displayedDate = trip 
    ? format(trip.starts_at, " d ' de ' LLL").concat(' ate ').concat(format(trip.ends_at, "d ' de ' LLL"))
    :null

    return(
        <div>
             <div className="flex px-5 bg-zinc-900  justify-between h-16 items-center rounded-lg">
             <div className="flex gap-2 text-zinc-400 items-center ">
             <MapPin className="text-zinc-400"/>
             <span >{trip?.destination}</span>
             </div>
              <div className="flex items-center">
              <Calendar className="text-zinc-400 size-5"/>
              <span className="text-zinc-400 px-2">{displayedDate}</span>
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