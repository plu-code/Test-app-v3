import Home from './Home';
import Pagesbar from './Pagesbar';
import { useState, useEffect } from "react";
import Single from './Single';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {

  const router = createBrowserRouter ([
    {
      path:"/",
      element:"",
    },
  ]);

  const [page, setPage] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {
            <div className="App">
              <h1 id="web-title">Test application</h1>
              <Home current={page}/>
              <Pagesbar start={page+1} j={page} setPage={()=>setPage(page)} p={page}/>
            </div>
            }>            
          </Route>
          <Route path='product/id:' element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

