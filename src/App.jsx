import { Header } from "./components/layouts/Header"
import { AllRoutes } from "./routes/AllRoutes"
import { Footer } from "./components/layouts/Footer"


function App() {
  

  return (
    <div className="dark:bg-slate-800">

    <Header/>
    <AllRoutes/>
    <Footer/>
     
    </div>
  )
}

export default App
