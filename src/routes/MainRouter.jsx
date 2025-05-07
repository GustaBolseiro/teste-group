import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserDetails from "../Components/UserDetails";
import UserList from "../Components/UsersList";
import Dados from "../Pages/Dados";
import Home from "../Pages/Home";
import ProductCard from "../Pages/ProductCard"



export const MainRouter = () => {
    return (
        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='produtos' element={<ProductCard/>}/>
            <Route path='usuarios' element={<UserList/>}/>
            <Route path='usuarios/:id' element={<UserDetails />} />
            <Route path='dados' element={<Dados />}/>
            <Route path='*' element={
              <h1>NOT FOUND!</h1>}/>
        </Routes>
      </BrowserRouter>
    );
};