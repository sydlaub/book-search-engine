import ReactDOM from 'react-dom'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
// import SearchBooks from './pages/SearchBooks.jsx'
// import SavedBooks from './pages/SavedBooks.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <h1 className='display-2'>Wrong page!</h1>,
//     children: [
//       {
//         index: true,
//         element: <SearchBooks />
//       }, {
//         path: '/saved',
//         element: <SavedBooks />
//       }
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )

ReactDOM.createRoot(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);