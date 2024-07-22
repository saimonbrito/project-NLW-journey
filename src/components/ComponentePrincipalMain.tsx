import { CircleCheck, Plus } from "lucide-react";

export function ComponentePrincipalMain(){
    return(
        <div className="px-2">
            <div className="flex items-center gap-4">

                <main className=" flex-1">
                    <div className="flex justify-between items-center">
                        <span className="text-zinc-50 font-bold text-xl">Atividades</span>
                        <div className="flex  bg-lime-300 px-5 py-2 justify-center items-center gap-2 rounded-lg">
                            <Plus className="  text-lime-950"/>
                            <button className="text-lime-950">Cadastrar atividade</button>
                        </div>
                    </div>

                    <div className=" flex my-6 flex-col gap-8">
                    <div>
                        <span className="text-zinc-300 text-sm">Dia 17</span><span className=" px-2 text-sm text-zinc-500">Sabado</span>
                        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                    </div>

                    <div className="flex gap-3 flex-col">
                            <div>
                            <span className="text-zinc-300 text-sm">Dia 18</span><span className=" px-2 text-sm text-zinc-500">Domingo</span>
                            </div>
                            {/* card1 */}
                            <div className=" bg-zinc-900  rounded-lg px-4 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <CircleCheck className="text-lime-300 size-5"/>
                                    <p className="text-zinc-100 text-sm">Corrida de Kart</p>
                                </div>
                                <span className="text-zinc-400">14:00h</span>
                            </div> 
                            {/* card2 */}
                            <div className=" bg-zinc-900  rounded-lg px-4 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <CircleCheck className="text-lime-300 size-5"/>
                                    <p className="text-zinc-100 text-sm">Academia em grupo</p>
                                </div>
                                <span className="text-zinc-400">14:00h</span>
                           </div>
                           <div>
                            <span className="text-zinc-300 text-sm">Dia 19</span><span className=" px-2 text-sm text-zinc-500">Segunda Feira</span>
                            </div>
                            {/* card1 */}
                            <div className=" bg-zinc-900  rounded-lg px-4 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <CircleCheck className="text-lime-300 size-5"/>
                                    <p className="text-zinc-100 text-sm">Almoço</p>
                                </div>
                                <span className="text-zinc-400">14:00h</span>
                            </div> 
                            {/* card2 */}
                            <div className=" bg-zinc-900  rounded-lg px-4 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <CircleCheck className="text-lime-300 size-5"/>
                                    <p className="text-zinc-100 text-sm">Gaming session</p>
                                </div>
                                <span className="text-zinc-400">14:00h</span>
                           </div>
                           {/* card3 */}
                           <div className=" bg-zinc-900  rounded-lg px-4 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <CircleCheck className="text-lime-300 size-5"/>
                                    <p className="text-zinc-100 text-sm">Jantar</p>
                                </div>
                                <span className="text-zinc-400">14:00h</span>
                           </div>
                           {/* fin card */}
                           
                          </div>
                    </div>

                    

                </main>

                <div className=" w-80 flex ">
                        <span className="text-zinc-400">box 2</span>
                </div>
            </div>
        </div>
    )
}