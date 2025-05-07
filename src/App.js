// components
import Home from "./Pages/Home";
import UsersList from "./Components/UsersList";
import UserDetails from "./Components/UserDetails";
import ProductCard from "./Components/ProductLogic";
import Dados from "./Pages/Dados";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      <h1 className="text-3xl font-bold underline">SITE TESTE REACT!</h1>
      <div>
        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='produtos' element={<ProductCard/>}/>
            <Route path='usuarios' element={<UsersList/>}/>
            <Route path='usuarios/:id' element={<UserDetails />} />
            <Route path='dados' element={<Dados />}/>
            <Route path='*' element={
              <h1>NOT FOUND!</h1>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
