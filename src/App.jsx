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

  var data=[
    {
      Name:"AI and Natural Language Processing",
      imagesource:"https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https:%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2017%2F12%2Fnobrain_language_ai.jpg&signature=7c2c7e2e77ced9e31e80645a29d0a69e"
    },
    {
      Name:"Blockchain Development",
      imagesource:"https://cryptomojo.com/wp-content/uploads/2020/02/blockchain-platforms.png"
    },
    {
      Name:"Cloud Computing (AWS, Azure, Google Cloud)",
      imagesource:"https://indianprinterpublisher.com/wp-content/uploads/2019/05/Cloud.jpg"
    },
    {
      Name:"Mobile App Development (iOS/Android)",
      imagesource:"https://www.qualitydevs.com/wp-content/uploads/2021/03/Desarrollo-apps-moviles.jpg"
    },
    {
      Name:"Java Programming",
      imagesource:"https://www.wallpapertip.com/wmimgs/160-1607565_java-programming.jpg"
    },
    {
      Name:"Python with IIT Certification",
      imagesource:"https://www.learnerzhub.com/wp-content/uploads/2021/07/best-online-python-course.png"
    },
    {
      Name:"Digital Marketing and Analytics",
      imagesource:"https://www.lucidadvertising.com/wp-content/uploads/2022/09/Digital-Marketing-image-1024x683.jpeg"
    },
    {
      Name:"SQL and Database Management",
      imagesource:"https://i.ytimg.com/vi/qmwKiuKDPBQ/maxresdefault.jpg"
    },
    {
      Name:"Game Development",
      imagesource:"https://servreality.com/wp-content/uploads/2021/06/Game-Development.jpeg"
    }
  ]
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<All data={data}/>}></Route>
          <Route path='/fullstackdevelopment' element={<Fullstack data={data}/>}></Route>
          <Route path='/datascience' element={<Datascience data={data}/>}></Route>
          <Route path='/cybersecurity' element={<Cybersecurity data={data}/>}></Route>
          <Route path='/career' element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
