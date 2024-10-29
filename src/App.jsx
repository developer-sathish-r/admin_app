import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Private_Layout from './pages/privateLayout/privateLayout';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { NotFound } from './pages/404/PageNotFound';

function App() {

  const login = useSelector((Item) => Item.login);

  return (
    <>
      {login ?
        <Private_Layout />
        :
        <>
          <Routes >
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes >
        </>
      }
    </>
  );
}
export default App;