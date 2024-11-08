import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <section className="container mt-5">
        <Outlet />
      </section>
    </>
  );
}

export default App;