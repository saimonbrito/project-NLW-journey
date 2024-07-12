import { Header } from "./components/header"
import {Main} from "./components/main"
import {Footer} from "./components/footer"
export function App() {


  return (
    <>
       <div className="h-screen  flex flex-col gap-10 justify-center items-center bg-pattesr bg-no-repeat bg-center">
       <Header/>
       <Main/>
       <Footer/>
       </div>
    </>
  )
}


