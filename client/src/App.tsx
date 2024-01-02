import React from 'react';
import './App.css';
// import PublicRoutes from './Routes/publicRoutes';
import router from './Routes/privateRoutes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* By tag handle  */}
      {/* <PublicRoutes/> */}

      {/* By object routering handle */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
