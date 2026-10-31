import Header from './Header/header'
import Footer from './Footer/footer'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import './App.scss'
import Modal from './Components/Modal1/modal1.jsx';

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <BrowserRouter>
     <Header onOpenModal={() => setIsModalOpen(true)}/>
        <Modal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
/>
     <Routes> 
        <Route path ='/' index element = {<Page1/>} />
         <Route path ='/Page2' element = {<Page2/>} />
          <Route path ='/Page3' element = {<Page3/>} />
     </Routes>
      <Footer/>
     </BrowserRouter>
    </>

  )
}


