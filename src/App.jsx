

import { createBrowserRouter, RouterProvider, Route, Link, createRoutesFromElements } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import Dashboard from './components/Dashboard.jsx';
import Rootlayout from './components/Rootlayout.jsx';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Route>
  ))

  return (
    <>
     <div className='App'>
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
