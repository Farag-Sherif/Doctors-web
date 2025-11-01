
import { useLocation } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import AppRoutes from './Routes'

function App() {
  const location = useLocation();
  return (
    <>
     {location.pathname === "/login" || location.pathname === "/signup" ? null: <Header />}
      <AppRoutes />
      {location.pathname === "/login" || location.pathname === "/signup" ? null: <Footer />}
    </>
  )
}

export default App
