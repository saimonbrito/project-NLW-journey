import { CircleCheck, CircleDashed, Link2, Plus, UserCog } from "lucide-react";
import { CadastrarAtividades } from "../components/cadastrarAtividades";
import { useState } from "react";
import { CardComponentePrincipal } from "../components/cardComponetePrincipal";
import { Button } from "../globalComponents/button";

export function ComponentePrincipalMain(){

    const [boxcadastrarAtividades,setCadastrarAtividades] = useState(false)

    function openFunboxcadastrarAtividades(){
        setCadastrarAtividades(true)
    }
    function closeFunboxcadastrarAtividades(){
        setCadastrarAtividades(false)
    }
    return(
        <div className="px-2">
            <div className="flex items-start gap-16">

                <main className=" flex-1">
                    <div className="flex justify-between items-center">
                        <span className="text-zinc-50 font-bold text-xl">Atividades</span>

                        

                        <Button  onClick={openFunboxcadastrarAtividades}>
                           <Plus className="  text-lime-950"/>
                            Cadastra atividades
                        </Button>


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
                            <CardComponentePrincipal childdren="Corrida de Kart" />
                            <CardComponentePrincipal childdren="Academia em grupo"/>
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
                    {boxcadastrarAtividades && (
                    <CadastrarAtividades
                        closeFunBoxConfirmarViagem={closeFunboxcadastrarAtividades}
                    
                        />
                    )}

                </main>

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

                             <h2 className="text-zinc-50 ">Convictions</h2>

                        <div className="flex justify-center gap-20 items-center">
                            <div className="flex  flex-col gap-1">
                                <span className="text-zinc-100">Jessica White</span>
                                <a className="text-zinc-400 text-xs" href="*">jessica.white44@yahoo.com</a>
                            </div>
                            <CircleDashed className="text-zinc-400"/>                        
                        </div>

                        <div className="flex justify-center gap-20 items-center">
                            <div className="flex  flex-col gap-1">
                                <span className="text-zinc-100">Dr. Rita Pacocha</span>
                                <a className="text-zinc-400 text-xs" href="*">jessica.white44@yahoo.com</a>
                            </div>
                            <CircleCheck className="text-lime-300"/>                        
                        </div>
                        <div className="flex justify-center gap-20 items-center">
                            <div className="flex  flex-col gap-1">
                                <span className="text-zinc-100">Wilfred Dickens III</span>
                                <a className="text-zinc-400 text-xs" href="*">lacy.stiedemann@gmail.com</a>
                            </div>
                            <CircleCheck className="text-lime-300"/>                        
                        </div>

                        <div className="flex  bg-zinc-800 px-4 py-2 justify-center items-center gap-2 rounded-lg">
                            <UserCog className="  text-zinc-400"/>
                            <button className="text-zinc-200 ">Gerenciar convidados</button>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}