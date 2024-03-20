import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar'
import All from './All'
import Fullstack from './Fullstack'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<All />}></Route>
          <Route path='/fullstackdevelopment' element={<Fullstack />}></Route>
          <Route path='/datascience' element={<Datascience />}></Route>
          <Route path='/cybersecurity' element={<Cybersecurity />}></Route>
          <Route path='/career' element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
