import Header from './Header/header'
import Footer from './Footer/footer'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import './App.scss'
import Modal1 from './Components/Modal1/modal1.jsx';
import Modal2 from './Components/Modal2/modal2.jsx';

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
   const [activeModal, setActiveModal] = useState(null);
   const closeModal = () => setActiveModal(null);
  return (
    <>
    <BrowserRouter>
     <Header  onOpenModal1={() => setActiveModal('modal1')} onOpenModal2={() => setActiveModal('modal2')} />
        <Modal1 isOpen={activeModal === 'modal1'} onClose={closeModal} />
        <Modal2 isOpen={activeModal === 'modal2'} onClose={closeModal} />
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


