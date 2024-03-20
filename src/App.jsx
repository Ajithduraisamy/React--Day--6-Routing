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
      imagesource:"https://mechomotive.com/wp-content/uploads/2021/06/DBMS.png"
    },
    {
      Name:"Game Development",
      imagesource:"https://servreality.com/wp-content/uploads/2021/06/Game-Development.jpeg"
    }
  ]

  var obj=[
    {
      Name:"Front-end Development",
      imagesource:"https://tolustar.com/wp-content/uploads/2020/02/Front-end-Development.jpeg"
    },
    {
      Name:"HyperText Markup Language(HTML)",
      imagesource:"https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2020/01/html-code.jpg"
    },
    {
      Name:"Cascading Style Sheets(CSS)",
      imagesource:"https://www.jotform.com/blog/wp-content/uploads/2008/07/photo-1505685296765-3a2736de412f-549x366.jpeg"
    },
    {
      Name:"JavaScript",
      imagesource:"https://assets-global.website-files.com/606a802fcaa89bc357508cad/61143444834cd54b9b0a88b3_2-p-2600.png"
    },
    {
      Name:"Back-end Development",
      imagesource:"https://jotagep.com/static/74a1d4240b93fa116fb47a6fa055f353/7d442/back.png"
    },
    {
      Name:"React",
      imagesource:"https://cms-assets.tutsplus.com/uploads/users/1160/posts/25205/preview_image/react.jpg"
    },
    {
      Name:"Node.js",
      imagesource:"https://miro.medium.com/v2/resize:fit:1200/1*ODU5V_oAmYmzvZ1wIw3rDw.png"
    },
    {
      Name:"SQL and Database Management",
      imagesource:"https://mechomotive.com/wp-content/uploads/2021/06/DBMS.png"
    },
    {
      Name:"Angular",
      imagesource:"https://www.besanttechnologies.com/wp-content/uploads/2019/12/angular-architecture.jpg"
    }
  ]

  var data_3=[
    {
      Name:"Data Collection",
      imagesource:"https://nrootlabs.com/wp-content/uploads/2017/08/data-collection.png"
    },
    {
      Name:"Data Preprocessing",
      imagesource:"https://www.researchgate.net/profile/Kraisak-Kesorn/publication/327759880/figure/fig10/AS:673198895017986@1537514532279/Major-tasks-of-data-preprocessing-to-enhance-data-quality-before-using-in-a-forecasting.png"
    },
    {
      Name:"Exploratory Data Analysis (EDA)",
      imagesource:"https://media.licdn.com/dms/image/D4D12AQHNwwUtUX1t3g/article-cover_image-shrink_720_1280/0/1677481672335?e=2147483647&v=beta&t=O48x55paoPnEevXsJPz5NWfyBeFr394WgttHCowYivs"
    },
    {
      Name:"Statistical Analysis",
      imagesource:"https://cdn.educba.com/academy/wp-content/uploads/2019/12/statistical-analysis-types.jpg"
    },
    {
      Name:"Machine Learning",
      imagesource:"https://codingcompiler.com/wp-content/uploads/2019/07/What-is-Machine-Learning.jpg"
    },
    {
      Name:"Feature Engineering",
      imagesource:"https://www.displayr.com/wp-content/uploads/2018/09/shutterstock_292036460.jpg"
    },
    {
      Name:"Model Evaluation and Validation",
      imagesource:"https://c8.alamy.com/comp/H92ND0/assessment-evaluation-measure-validation-review-concept-H92ND0.jpg"
    },
    {
      Name:"Deployment and Monitoring",
      imagesource:"https://www.turningcloud.com/blog/wp-content/uploads/2021/01/cloud-deployment-models.jpg"
    },
    {
      Name:"Ethics and Privacy",
      imagesource:"https://tgandh.com/wp-content/uploads/2020/10/201004_ethics-confidentiality_HAWK_16x934094518_m.jpg"
    }
  ]
  
  var data_4=[
    {
      Name:"Confidentiality",
      imagesource:"https://www.cmpa-acpm.ca/static-assets/images/meta/good-practices/21-privacy-and-confidentiality-opengraph.jpg"
    },
    {
      Name:"Integrity",
      imagesource:"https://4.bp.blogspot.com/-jOXtgLERP7M/T6w5V-omNyI/AAAAAAAABXI/wVAMO9ki8rc/s1600/Integrity.jpg"
    },
    {
      Name:"Availability",
      imagesource:"https://thedigitalprojectmanager.b-cdn.net/wp-content/uploads/2021/12/Resource-Availability-in-Project-Management-featured-image-1200x630.png"
    },
    {
      Name:"Authentication",
      imagesource:"https://cdn.auth0.com/blog/stockimages/cybersecurity_finger.jpg"
    },
    {
      Name:"Authorization",
      imagesource:"https://pix4free.org/assets/library/2021-04-28/originals/authorization.jpg"
    },
    {
      Name:"Encryption",
      imagesource:"https://www.ndimensionz.com/wp-content/uploads/2016/03/datastore-banner.jpg"
    },
    {
      Name:"Firewalls",
      imagesource:"https://blog.privadovpn.com/wp-content/uploads/2020/06/shutterstock_579296842-scaled-1.jpg"
    },
    {
      Name:"Intrusion Detection and Prevention Systems (IDPS)",
      imagesource:"https://kirkpatrickprice.com/wp-content/uploads/2020/03/Stay-Secure-With-These-Intrusion-Detection-and-Protection-Techniques-700x500.jpg"
    },
    {
      Name:"Security Incident Response",
      imagesource:"https://ebrp.net/wp-content/uploads/2017/02/incident-response-simplified-an-infographic.jpg"
    }
  ]

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<All data={data}/>}></Route>
          <Route path='/fullstackdevelopment' element={<Fullstack obj={obj}/>}></Route>
          <Route path='/datascience' element={<Datascience data_3={data_3}/>}></Route>
          <Route path='/cybersecurity' element={<Cybersecurity data_4={data_4}/>}></Route>
          <Route path='/career' element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
