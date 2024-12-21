// components
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { About } from './Pages/About';
//styles
import './Components/Header/Header.css';
import './Components/Main/Main.css';
import './Components/Buttons/PrimaryButton.css';
import './App.css';
import { MenuPage } from './Pages/MenuPage';
import { ReservationPage } from './Pages/ReservationPage';

function App() {
  return (
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/About' element={<About />} />
    <Route path='/Menu' element={<MenuPage />} />
    <Route path='/Reservation' element={<ReservationPage />} />
    </Routes>
  );
}

export default App;
