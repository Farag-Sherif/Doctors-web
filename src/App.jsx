
import { useLocation } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import AppRoutes from './Routes'
import AskAI from './Components/Buttons/Ask-AI/Ask_AI';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/ask" ? null : <Header />}
      <AppRoutes />
      {location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/ask" ? null : <Footer />}
      { location.pathname === "/ask" ? null : <AskAI />}
    </>
  )
}

export default App
