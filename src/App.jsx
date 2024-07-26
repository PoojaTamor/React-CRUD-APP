import Crud_functions from "./Crud_functions"
import Footer from "./Footer"
import Navbar from "./Navbar"
import {Toaster} from 'react-hot-toast' 
function App() {

  return (
    <>
    <Navbar/>
    <Crud_functions/>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
