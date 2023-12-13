import './App.css';

//reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';

//4 - navegando entre links
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar/>
      <h1>React Router</h1>
      <Outlet/>
    </>
  )
}

export default App
