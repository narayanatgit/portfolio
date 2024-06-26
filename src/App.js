import {React,useState,useEffect,useContextProvider} from 'react'
import Axios from 'axios'
import { saveAs } from 'file-saver';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './Header';
import Services from './Services';
import Hero from './Hero';
import Skills from './Skills';
import About from './About';
import axios from 'axios';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Social from './Social';
import Projects from './Projects';

import { ProjectDeatial } from './ProjectDeatial';

function App() {
  const [userdata, setuserdata] = useState({});

  
  useEffect(() => {
    const handlePopstate = () => {
      
      window.location.reload();
    };
    const fetchData = async () => {
      
      try {
       
  await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae').
  then((response)=>{setuserdata((response.data.user))})
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
      
    };

    fetchData();
  
   
  }, [userdata]);
 


  return (
    <>
  
    {userdata==undefined?(<>loading</>):(<> 
    <Router>
      <Routes>
        <Route path='/' element={ <><Header userda={userdata}/>
    <Hero  userda={userdata.about} />
   
    <About userda={userdata.about}/>
    <Services userda={userdata.timeline}/>
    <Skills userda={userdata.skills}/>
    <Projects userda={userdata.projects}/>
    <Pricing  userda={userdata.services}/>
    <Testimonials  userda={userdata.testimonials}/>
    <Social userda={userdata.social_handles}/></>}/>
    {  userdata.projects&&userdata.projects.map((item)=>(
     <Route path={`/${item.title}`} element={<ProjectDeatial data={item}/>}/>))}
      </Routes>
      
    </Router>
    
   
  
   
    </>)}
  
   
   

    </>
  );
}

export default App;
