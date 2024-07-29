import { ComponentProps, ReactNode } from "react"

interface buttonProps extends ComponentProps<'button'>{
    children:ReactNode
}

export function Button({children,...props}:buttonProps){
    return( 
        <div>
            <button  {...props} className=" w-full text-center bg-lime-300 text-lime-950 px-5 py-2 hover:bg-lime-400 rounded-lg flex justify-center items-center gap-1 font-medium">
              {children}
           </button>
        </div>
    )
}