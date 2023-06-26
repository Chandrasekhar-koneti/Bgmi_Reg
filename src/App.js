import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/Pages/SignUp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from './components/Pages/Login';
import Dummy from './components/Pages/Dummy';

function App() {
  const router1=createBrowserRouter([
    {path:'/',element:<SignIn />},
    {path:'/signup',element:<SignUp />},
    {path:'/dummy',element:<Dummy />}
  ])
  return (
    <>
      <RouterProvider router={router1}></RouterProvider>
    </>
  );
}

export default App;
