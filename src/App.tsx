
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import { Home } from './sections/home';
import { About } from './sections/about';

import { Footer } from './components/footer';
import { Services } from './sections/services';
import { Career } from './sections/career';
import { Notfound } from './sections/notfound';
import  { Applicationform } from './sections/applicationform';
import { Terms } from './sections/termsandconditions';
import { Itconsultanvcy } from './sections/itconsultancy';
import { Edutech } from './sections/edutech';
import { Digitalmarketing } from './sections/digitalmarketing';
import { Softwaredevelopment } from './sections/softwaredevelopment';
import  JobFilterUI from './sections/jobs';
import { Contactus } from './sections/contactus';
import CustomCursor from './components/cursor';
import { CoursesForm } from './sections/coursesappliactionform';
function App() {

  return(
    <>      
     <div >
      <CustomCursor/>
       <BrowserRouter  >
      <Header/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>     
         <Route path="/services" element={<Services/>}/>  
         <Route path="/career" element={<Career/>}/>
          <Route path="/jobs" element={<JobFilterUI/>}/>
          <Route path="/applicationform" element={<Applicationform/>}/>
          <Route path="/termsandconditions" element={<Terms/>}/>
          <Route path="/itconsultancy" element={<Itconsultanvcy/>}/>
          <Route path="/edutech" element={<Edutech/>}/>
          <Route path="/softwaredevelopment" element={<Softwaredevelopment/>}/>
          <Route path="/digitalmarketing" element={<Digitalmarketing/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/courseform' element={<CoursesForm/>}/>
          <Route path="*" element={<Notfound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     </div>
     
    </>
  )
}

export default App;
