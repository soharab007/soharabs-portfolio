import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/Home/Home';

function App() {
  const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  
  }
  ])
  return (
    <div className="App">
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
// function App() {

//   const routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home></Home>
//     },
//     {
//       path: "/home",
//       element: <Home></Home>
//     },
//     {
//       path: "/:id",
//       element: <ProjectDetails></ProjectDetails>,
//       loader: ({ params }) => { return params.id }
//     },
//   ])


//   return (
//     <div className="App">
//       <RouterProvider router={routes}></RouterProvider>
//     </div>
//   );
// }

// export default App;