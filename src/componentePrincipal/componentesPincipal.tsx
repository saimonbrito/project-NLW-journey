import { ComponentePrincipalHeader } from "./componentePrincipalHeader";
import { ComponentePrincipalMain } from "./ComponentePrincipalMain";



 export function ComponentesPrincipal(){
    return(
      
      <div className=" max-w-6xl mx-auto space-y-8 px-6 py-10 ">
       
          <ComponentePrincipalHeader/>
          <ComponentePrincipalMain/>

      </div>

    )
 }