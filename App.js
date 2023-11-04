import {BrowserRouter,Routes,Route} from "react-router-dom"
import Add from "./Add"
import Sparticipation from "./Sparticipation"


const App=()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/add" element={<Add/>}/>
                <Route path="/sparticipation" element={<Sparticipation/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App